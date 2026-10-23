import ActivityKit
import SwiftUI
import WidgetKit

@available(iOSApplicationExtension 16.2, *)
struct BinNightLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: BinNightAttributes.self) { context in
            LockScreenActivityView(context: context)
                .environment(\.colorScheme, .dark)
                .activityBackgroundTint(Color(hex: 0x1E2230))
                .activitySystemActionForegroundColor(.white)
        } dynamicIsland: { context in
            let kind = context.attributes.bins.first ?? "black"
            return DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    BinGlyph(kind: kind, size: 44).padding(.leading, 4)
                }
                DynamicIslandExpandedRegion(.center) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("BIN NIGHT")
                            .font(.system(size: 11, weight: .bold))
                            .foregroundStyle(Color(hex: 0x8FA8FF))
                        Text(context.state.putOut ? "\(context.attributes.title) out ✓" : "\(context.attributes.title) out?")
                            .font(.system(size: 17, weight: .bold))
                            .lineLimit(1)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    DoneButton(key: context.attributes.key, putOut: context.state.putOut)
                }
            } compactLeading: {
                HStack(spacing: 2) {
                    ForEach(context.attributes.bins, id: \.self) { bin in
                        Circle().fill(BinPalette.color(bin)).frame(width: 10, height: 10)
                    }
                }
            } compactTrailing: {
                Text(context.state.putOut ? "Out ✓" : "Tonight")
                    .font(.system(size: 13, weight: .semibold))
            } minimal: {
                Circle().fill(BinPalette.color(kind)).frame(width: 12, height: 12)
            }
        }
    }
}

@available(iOSApplicationExtension 16.2, *)
private struct LockScreenActivityView: View {
    let context: ActivityViewContext<BinNightAttributes>

    var body: some View {
        HStack(spacing: 14) {
            HStack(spacing: -10) {
                ForEach(context.attributes.bins, id: \.self) { BinGlyph(kind: $0, size: 52) }
            }
            VStack(alignment: .leading, spacing: 2) {
                Text("BIN NIGHT")
                    .font(.system(size: 12, weight: .bold))
                    .tracking(0.6)
                    .foregroundStyle(Color(hex: 0x8FA8FF))
                Text(context.state.putOut ? "\(context.attributes.title) out ✓" : "\(context.attributes.title) out?")
                    .font(.system(size: 19, weight: .bold))
                    .foregroundStyle(.white)
                    .lineLimit(1)
                    .minimumScaleFactor(0.7)
                Text("Collected tomorrow morning")
                    .font(.system(size: 13))
                    .foregroundStyle(.white.opacity(0.7))
            }
            Spacer(minLength: 0)
            DoneButton(key: context.attributes.key, putOut: context.state.putOut)
        }
        .padding(16)
    }
}

@available(iOSApplicationExtension 16.2, *)
private struct DoneButton: View {
    let key: String
    let putOut: Bool

    var body: some View {
        if putOut {
            Image(systemName: "checkmark.circle.fill")
                .font(.system(size: 28))
                .foregroundStyle(Color(hex: 0x46B35D))
        } else if #available(iOSApplicationExtension 17.0, *) {
            Button(intent: MarkPutOutIntent(key: key)) {
                Label("Done", systemImage: "checkmark")
                    .font(.system(size: 15, weight: .semibold))
                    .labelStyle(.titleAndIcon)
            }
            .buttonStyle(.borderedProminent)
            .buttonBorderShape(.capsule)
            .tint(Color(hex: 0x4F6EF7))
        }
    }
}
