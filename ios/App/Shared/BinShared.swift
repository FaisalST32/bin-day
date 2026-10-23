import Foundation
import SwiftUI
import UserNotifications
#if canImport(ActivityKit)
import ActivityKit
#endif
#if canImport(AppIntents)
import AppIntents
#endif
#if canImport(WidgetKit)
import WidgetKit
#endif

/// Code shared by the app (WidgetBridge plugin) and the widget extension.
enum BinShared {
    static let appGroup = "group.io.zyur.bindicator"
    static let widgetDataKey = "widgetData"
    static let pendingPutOutKey = "pendingPutOut"

    static var defaults: UserDefaults? { UserDefaults(suiteName: appGroup) }

    static func loadPayload() -> WidgetPayload? {
        guard let json = defaults?.string(forKey: widgetDataKey), let data = json.data(using: .utf8) else { return nil }
        return try? JSONDecoder().decode(WidgetPayload.self, from: data)
    }

    static func savePayload(json: String) {
        defaults?.set(json, forKey: widgetDataKey)
        reloadWidgets()
    }

    static func reloadWidgets() {
        #if canImport(WidgetKit)
        WidgetCenter.shared.reloadAllTimelines()
        #endif
    }

    /// Marks a collection as put out from outside the app (Live Activity button).
    /// The app picks these up via WidgetBridge.takePendingPutOut() when it next runs.
    static func markPutOut(key: String) {
        guard let defaults else { return }
        var pending = defaults.stringArray(forKey: pendingPutOutKey) ?? []
        if !pending.contains(key) { pending.append(key) }
        defaults.set(pending, forKey: pendingPutOutKey)

        if let json = defaults.string(forKey: widgetDataKey), let data = json.data(using: .utf8),
           var payload = try? JSONDecoder().decode(WidgetPayload.self, from: data) {
            payload.collections = payload.collections.map { c in
                var c = c
                if c.date == key { c.putOut = true }
                return c
            }
            if let encoded = try? JSONEncoder().encode(payload), let string = String(data: encoded, encoding: .utf8) {
                defaults.set(string, forKey: widgetDataKey)
            }
        }

        // Matches the night-before reminder id in src/services/reminders.ts: YYMMDD * 10 + 1.
        let digits = key.replacingOccurrences(of: "-", with: "").dropFirst(2)
        if let base = Int(digits) {
            UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: ["\(base * 10 + 1)"])
        }
        reloadWidgets()
    }

    static func takePendingPutOut() -> [String] {
        let pending = defaults?.stringArray(forKey: pendingPutOutKey) ?? []
        defaults?.removeObject(forKey: pendingPutOutKey)
        return pending
    }
}

struct WidgetPayload: Codable {
    struct Collection: Codable, Hashable {
        var date: String
        var bins: [String]
        var title: String
        var putOut: Bool

        var day: Date? { BinDates.parse(date) }
    }

    var code: String
    var updatedAt: String
    var collections: [Collection]

    /// Collections on or after the given day.
    func upcoming(from date: Date) -> [Collection] {
        let start = Calendar.current.startOfDay(for: date)
        return collections.filter { ($0.day ?? .distantPast) >= start }
    }
}

enum BinDates {
    private static let keyFormatter: DateFormatter = {
        let f = DateFormatter()
        f.calendar = Calendar(identifier: .gregorian)
        f.locale = Locale(identifier: "en_GB_POSIX")
        f.timeZone = .current
        f.dateFormat = "yyyy-MM-dd"
        return f
    }()

    static func parse(_ key: String) -> Date? { keyFormatter.date(from: key) }

    static func format(_ date: Date, _ template: String) -> String {
        let f = DateFormatter()
        f.locale = Locale(identifier: "en_GB")
        f.setLocalizedDateFormatFromTemplate(template)
        return f.string(from: date)
    }

    static func daysUntil(_ day: Date, from now: Date) -> Int {
        let cal = Calendar.current
        return cal.dateComponents([.day], from: cal.startOfDay(for: now), to: cal.startOfDay(for: day)).day ?? 0
    }

    /// "Today", "Tomorrow", "in 5 days".
    static func relative(_ day: Date, from now: Date) -> String {
        switch daysUntil(day, from: now) {
        case 0: return "Today"
        case 1: return "Tomorrow"
        case let n: return "in \(n) days"
        }
    }
}

/// Mirrors BINS in src/lib/bins.ts.
enum BinPalette {
    static func color(_ kind: String, dark: Bool = false) -> Color {
        if dark {
            switch kind {
            case "black": return Color(hex: 0x4B515C)
            case "brown": return Color(hex: 0x9A6847)
            case "green": return Color(hex: 0x46B35D)
            default: break
            }
        }
        switch kind {
        case "black": return Color(hex: 0x2B2F36)
        case "blue": return Color(hex: 0x2F6FED)
        case "brown": return Color(hex: 0x8A5A3B)
        case "green": return Color(hex: 0x3A9A4F)
        default: return Color(hex: 0x9EA2A9)
        }
    }

    static func gradient(_ kind: String) -> [Color] {
        switch kind {
        case "black": return [Color(hex: 0x4A4F59), Color(hex: 0x2B2F36), Color(hex: 0x1B1E23)]
        case "blue": return [Color(hex: 0x5B8FF5), Color(hex: 0x2F6FED), Color(hex: 0x1F4FC0)]
        case "brown": return [Color(hex: 0xB07A55), Color(hex: 0x8A5A3B), Color(hex: 0x5F3D27)]
        case "green": return [Color(hex: 0x5CC06F), Color(hex: 0x3A9A4F), Color(hex: 0x276B36)]
        default: return [Color(hex: 0xB0B4BA), Color(hex: 0x80848B)]
        }
    }

    static let orange = Color(hex: 0xF26B3A)
}

extension Color {
    init(hex: UInt32) {
        self.init(
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255
        )
    }
}

/// A wheelie bin drawn in SwiftUI so it stays sharp at any size.
struct BinGlyph: View {
    var kind: String
    var size: CGFloat = 40
    var tint: Color? = nil
    /// Single-colour version for lock screen widgets, which render in one tint.
    var monochrome = false
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        let c = monochrome ? Color.primary : (tint ?? BinPalette.color(kind, dark: scheme == .dark))
        let wheel = monochrome ? Color.primary : Color(hex: 0x1A1C20)
        let w = size * 0.78
        VStack(spacing: 0) {
            RoundedRectangle(cornerRadius: size * 0.04)
                .fill(c.opacity(0.95))
                .frame(width: w, height: size * 0.12)
                .overlay(RoundedRectangle(cornerRadius: size * 0.04).fill(Color.white.opacity(0.18)))
            BinBodyShape()
                .fill(c)
                .overlay(
                    HStack(spacing: w * 0.36) {
                        Capsule().fill(Color.black.opacity(0.15)).frame(width: size * 0.05)
                        Capsule().fill(Color.black.opacity(0.15)).frame(width: size * 0.05)
                    }
                    .padding(.vertical, size * 0.1)
                )
                .frame(width: w * 0.92, height: size * 0.68)
            HStack(spacing: w * 0.5) {
                Circle().fill(wheel).frame(width: size * 0.14, height: size * 0.14)
                Circle().fill(wheel).frame(width: size * 0.14, height: size * 0.14)
            }
            .offset(y: -size * 0.05)
        }
        .frame(width: size, height: size)
    }
}

private struct BinBodyShape: Shape {
    func path(in rect: CGRect) -> Path {
        let inset = rect.width * 0.08
        var p = Path()
        p.move(to: CGPoint(x: rect.minX, y: rect.minY))
        p.addLine(to: CGPoint(x: rect.maxX, y: rect.minY))
        p.addLine(to: CGPoint(x: rect.maxX - inset, y: rect.maxY))
        p.addLine(to: CGPoint(x: rect.minX + inset, y: rect.maxY))
        p.closeSubpath()
        return p
    }
}

#if canImport(ActivityKit)
@available(iOS 16.1, *)
struct BinNightAttributes: ActivityAttributes {
    struct ContentState: Codable, Hashable {
        var putOut: Bool
    }

    /// Collection date key, "yyyy-MM-dd".
    var key: String
    var title: String
    var bins: [String]
}
#endif

#if canImport(AppIntents) && canImport(ActivityKit)
@available(iOS 17.0, *)
struct MarkPutOutIntent: LiveActivityIntent {
    static var title: LocalizedStringResource = "Mark bins as out"
    static var isDiscoverable = false

    @Parameter(title: "Collection")
    var key: String

    init() {}
    init(key: String) { self.key = key }

    func perform() async throws -> some IntentResult {
        BinShared.markPutOut(key: key)
        for activity in Activity<BinNightAttributes>.activities where activity.attributes.key == key {
            await activity.end(
                ActivityContent(state: .init(putOut: true), staleDate: nil),
                dismissalPolicy: .after(Date().addingTimeInterval(4))
            )
        }
        return .result()
    }
}
#endif
