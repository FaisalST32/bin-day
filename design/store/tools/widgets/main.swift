import AppKit
import SwiftUI

// Renders the real widget views (plus lock screen / Live Activity replicas) to transparent PNGs at 3x.

let out = "/tmp/store-shots/widgets/out"
try? FileManager.default.createDirectory(atPath: out, withIntermediateDirectories: true)

let now = BinDates.parse("2026-10-11")!.addingTimeInterval(12 * 3600)
let payload = WidgetPayload(code: "FRIDDG", updatedAt: "", collections: [
    .init(date: "2026-10-16", bins: ["blue"], title: "Blue bin", putOut: false),
    .init(date: "2026-10-23", bins: ["black", "green"], title: "Black and Green bins", putOut: false),
    .init(date: "2026-10-30", bins: ["brown"], title: "Brown bin", putOut: false),
])
let entry = BinEntry(date: now, payload: payload)

@MainActor
func save<V: View>(_ view: V, _ name: String, dark: Bool = false) {
    let r = ImageRenderer(content: view.environment(\.colorScheme, dark ? .dark : .light))
    r.scale = 3
    guard let img = r.nsImage, let tiff = img.tiffRepresentation, let rep = NSBitmapImageRep(data: tiff) else { return }
    try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: "\(out)/\(name).png"))
    print(name, rep.pixelsWide, rep.pixelsHigh)
}

struct Card<C: View>: View {
    let w: CGFloat, h: CGFloat
    @ViewBuilder let content: C
    var body: some View {
        content.frame(width: w, height: h)
            .clipShape(RoundedRectangle(cornerRadius: 23, style: .continuous))
    }
}

struct LockCircle: View {
    let bins: [String]; let day: String
    var body: some View {
        ZStack {
            Circle().fill(Color.white.opacity(0.16))
            VStack(spacing: 0) {
                BinGlyph(kind: bins.first ?? "black", size: 18, monochrome: true)
                Text(bins.map { $0.prefix(1).uppercased() + $0.dropFirst() }.joined(separator: " & "))
                    .font(.system(size: 13, weight: .bold)).lineLimit(1).minimumScaleFactor(0.6)
                Text(day).font(.system(size: 10, weight: .medium)).opacity(0.75).lineLimit(1).minimumScaleFactor(0.7)
            }
            .padding(.horizontal, 6)
        }
        .foregroundStyle(.white)
        .environment(\.colorScheme, .dark)
        .frame(width: 72, height: 72)
    }
}

struct LiveActivity: View {
    let bins: [String]; let title: String
    var body: some View {
        HStack(spacing: 14) {
            HStack(spacing: -10) { ForEach(bins, id: \.self) { BinGlyph(kind: $0, size: 52) } }
            VStack(alignment: .leading, spacing: 2) {
                Text("BIN NIGHT").font(.system(size: 12, weight: .bold)).tracking(0.6).foregroundStyle(Color(hex: 0x8FA8FF))
                Text("\(title) out?").font(.system(size: 19, weight: .bold)).foregroundStyle(.white).lineLimit(1)
                Text("Collected tomorrow morning").font(.system(size: 13)).foregroundStyle(.white.opacity(0.7))
            }
            Spacer(minLength: 0)
            HStack(spacing: 5) {
                Image(systemName: "checkmark").font(.system(size: 13, weight: .bold))
                Text("Done").font(.system(size: 15, weight: .semibold))
            }
            .foregroundStyle(.white)
            .padding(.horizontal, 14).padding(.vertical, 8)
            .background(Capsule().fill(Color(hex: 0x4F6EF7)))
        }
        .padding(16)
        .frame(width: 372)
        .background(RoundedRectangle(cornerRadius: 24, style: .continuous).fill(Color(hex: 0x1E2230).opacity(0.92)))
        .environment(\.colorScheme, .dark)
    }
}

MainActor.assumeIsolated {
    save(Card(w: 170, h: 170) { SmallBinView(entry: entry) }, "small")
    save(Card(w: 364, h: 170) { MediumBinView(entry: entry) }, "medium")
    save(Card(w: 364, h: 170) { MediumBinView(entry: entry) }, "medium-dark", dark: true)
    save(LockCircle(bins: ["blue"], day: "Tomorrow"), "lock-circle")
    save(LiveActivity(bins: ["blue"], title: "Blue bin"), "live-activity")
}
