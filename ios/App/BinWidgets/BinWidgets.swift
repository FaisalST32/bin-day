import SwiftUI
import WidgetKit

struct BinEntry: TimelineEntry {
    let date: Date
    let payload: WidgetPayload?

    var upcoming: [WidgetPayload.Collection] { payload?.upcoming(from: date) ?? [] }
    var next: WidgetPayload.Collection? { upcoming.first }

    static let placeholder = BinEntry(
        date: Date(),
        payload: WidgetPayload(
            code: "FRIDDG",
            updatedAt: "",
            collections: (0..<3).map { i in
                let day = Calendar.current.date(byAdding: .day, value: 5 + i * 7, to: Date())!
                let f = DateFormatter()
                f.dateFormat = "yyyy-MM-dd"
                let bins = [["blue"], ["black", "green"], ["brown"]][i]
                return .init(date: f.string(from: day), bins: bins, title: "", putOut: false)
            }
        )
    )
}

struct BinProvider: TimelineProvider {
    func placeholder(in context: Context) -> BinEntry { .placeholder }

    func getSnapshot(in context: Context, completion: @escaping (BinEntry) -> Void) {
        let payload = BinShared.loadPayload()
        completion(payload == nil && context.isPreview ? .placeholder : BinEntry(date: Date(), payload: payload))
    }

    /// One entry per midnight so "in N days" stays right without the app running.
    func getTimeline(in context: Context, completion: @escaping (Timeline<BinEntry>) -> Void) {
        let payload = BinShared.loadPayload()
        let cal = Calendar.current
        let today = cal.startOfDay(for: Date())
        var entries = [BinEntry(date: Date(), payload: payload)]
        for offset in 1...7 {
            if let day = cal.date(byAdding: .day, value: offset, to: today) {
                entries.append(BinEntry(date: day, payload: payload))
            }
        }
        completion(Timeline(entries: entries, policy: .atEnd))
    }
}

// MARK: - Views

private extension View {
    @ViewBuilder
    func widgetBackground<B: View>(_ background: B) -> some View {
        if #available(iOSApplicationExtension 17.0, *) {
            containerBackground(for: .widget) { background }
        } else {
            self.background(background)
        }
    }
}

private func binsLabel(_ bins: [String]) -> String {
    let names = bins.map { $0.prefix(1).uppercased() + $0.dropFirst() }
    let joined = names.count > 1 ? names.dropLast().joined(separator: ", ") + " and " + names.last! : names.first ?? ""
    return joined + (names.count > 1 ? " bins" : " bin")
}

struct SmallBinView: View {
    let entry: BinEntry

    var body: some View {
        if let next = entry.next, let day = next.day {
            let kind = next.bins.first ?? "black"
            ZStack(alignment: .bottomTrailing) {
                VStack(alignment: .leading, spacing: 2) {
                    Text(next.putOut ? "BIN OUT ✓" : "BIN DAY")
                        .font(.system(size: 11, weight: .bold))
                        .tracking(0.8)
                        .foregroundStyle(.white.opacity(0.8))
                    Text(BinDates.format(day, "EEE"))
                        .font(.system(size: 30, weight: .heavy))
                        .foregroundStyle(.white)
                    Text(BinDates.format(day, "d MMM"))
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(.white.opacity(0.85))
                    Text(BinDates.relative(day, from: entry.date))
                        .font(.system(size: 13, weight: .medium))
                        .foregroundStyle(.white.opacity(0.85))
                    Spacer(minLength: 0)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .padding(16)

                HStack(spacing: -8) {
                    ForEach(next.bins, id: \.self) { bin in
                        BinGlyph(kind: bin, size: next.bins.count > 1 ? 40 : 52, tint: bin == kind ? Color.white.opacity(0.55) : nil)
                    }
                }
                .padding(.trailing, 12)
                .padding(.bottom, 10)
            }
            .widgetBackground(LinearGradient(colors: BinPalette.gradient(kind), startPoint: .topLeading, endPoint: .bottomTrailing))
        } else {
            EmptyStateView()
        }
    }
}

struct MediumBinView: View {
    let entry: BinEntry
    @Environment(\.colorScheme) private var scheme

    var body: some View {
        let cards = Array(entry.upcoming.prefix(3))
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Image("Wordmark")
                    .resizable()
                    .scaledToFit()
                    .frame(height: 12)
                Spacer()
                Text(entry.payload?.code ?? "")
                    .font(.system(size: 12, weight: .bold))
                    .foregroundStyle(.secondary)
            }
            if cards.isEmpty {
                EmptyStateView()
            } else {
                HStack(spacing: 8) {
                    ForEach(cards, id: \.self) { c in
                        if let day = c.day {
                            VStack(alignment: .leading, spacing: 6) {
                                Text(BinDates.format(day, "EEE d MMM").uppercased())
                                    .font(.system(size: 10, weight: .bold))
                                    .foregroundStyle(.secondary)
                                    .lineLimit(1)
                                    .minimumScaleFactor(0.8)
                                HStack(spacing: -4) {
                                    ForEach(c.bins, id: \.self) { BinGlyph(kind: $0, size: 34) }
                                }
                                Spacer(minLength: 0)
                                Text(dayCount(day))
                                    .font(.system(size: 16, weight: .heavy))
                                    .lineLimit(1)
                                    .minimumScaleFactor(0.7)
                            }
                            .padding(9)
                            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
                            .background(
                                RoundedRectangle(cornerRadius: 14, style: .continuous)
                                    .fill(scheme == .dark ? Color.white.opacity(0.07) : Color(hex: 0xF5F3EE))
                            )
                        }
                    }
                }
            }
        }
        .widgetBackground(scheme == .dark ? Color(hex: 0x17191D) : Color.white)
    }

    private func dayCount(_ day: Date) -> String {
        let n = BinDates.daysUntil(day, from: entry.date)
        switch n {
        case 0: return "Today"
        case 1: return "Tomorrow"
        default: return "\(n) days"
        }
    }
}

struct EmptyStateView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text("Bindicator")
                .font(.system(size: 14, weight: .bold))
            Text("Open the app to set up your collection code.")
                .font(.system(size: 12))
                .foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        .widgetBackground(Color(hex: 0xF5F3EE))
    }
}

@available(iOSApplicationExtension 16.0, *)
struct AccessoryView: View {
    let entry: BinEntry
    @Environment(\.widgetFamily) private var family

    var body: some View {
        if let next = entry.next, let day = next.day {
            let days = BinDates.daysUntil(day, from: entry.date)
            switch family {
            case .accessoryCircular:
                ZStack {
                    AccessoryWidgetBackground()
                    LockStack(bins: next.bins, day: dayLabel(day, days: days), compact: true)
                        .padding(.horizontal, 6)
                }
                .widgetBackground(Color.clear)
            case .accessoryInline:
                Text("\(binsLabel(next.bins)) · \(BinDates.format(day, "EEE"))")
                    .widgetBackground(Color.clear)
            default:
                LockStack(bins: next.bins, day: dayLabel(day, days: days), compact: false)
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                    .widgetBackground(Color.clear)
            }
        } else {
            Text("Bindicator").widgetBackground(Color.clear)
        }
    }
}

/// Centred icon, colour and day, shared by the circular and rectangular lock screen widgets.
@available(iOSApplicationExtension 16.0, *)
private struct LockStack: View {
    let bins: [String]
    let day: String
    let compact: Bool

    var body: some View {
        VStack(spacing: compact ? 0 : 1) {
            BinGlyph(kind: bins.first ?? "black", size: compact ? 18 : 20, monochrome: true)
                .widgetAccentable()
            Text(colourLabel(bins))
                .font(.system(size: compact ? 13 : 16, weight: .bold))
                .lineLimit(1)
                .minimumScaleFactor(0.6)
            Text(day)
                .font(.system(size: compact ? 10 : 13, weight: .medium))
                .foregroundStyle(.secondary)
                .lineLimit(1)
                .minimumScaleFactor(0.7)
        }
        .multilineTextAlignment(.center)
    }
}

/// "Brown", or "Black & Green" when two bins go out together.
private func colourLabel(_ bins: [String]) -> String {
    bins.map { $0.prefix(1).uppercased() + $0.dropFirst() }.joined(separator: " & ")
}

/// "Today", "Tomorrow", or "Fri 16 Oct".
private func dayLabel(_ day: Date, days: Int) -> String {
    switch days {
    case 0: return "Today"
    case 1: return "Tomorrow"
    default: return BinDates.format(day, "EEE d MMM")
    }
}

// MARK: - Widgets

struct NextBinWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "NextBin", provider: BinProvider()) { entry in
            SmallBinView(entry: entry)
        }
        .configurationDisplayName("Next bin")
        .description("Which bin goes out next, and when.")
        .supportedFamilies([.systemSmall])
        .contentMarginsDisabledIfAvailable()
    }
}

struct ComingUpWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "ComingUp", provider: BinProvider()) { entry in
            MediumBinView(entry: entry)
        }
        .configurationDisplayName("Coming up")
        .description("Your next three collections.")
        .supportedFamilies([.systemMedium])
    }
}

@available(iOSApplicationExtension 16.0, *)
struct LockScreenWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "LockScreen", provider: BinProvider()) { entry in
            AccessoryView(entry: entry)
        }
        .configurationDisplayName("Bin day")
        .description("The next collection on your lock screen.")
        .supportedFamilies([.accessoryRectangular, .accessoryCircular, .accessoryInline])
    }
}

private extension WidgetConfiguration {
    func contentMarginsDisabledIfAvailable() -> some WidgetConfiguration {
        if #available(iOSApplicationExtension 17.0, *) {
            return self.contentMarginsDisabled()
        }
        return self
    }
}