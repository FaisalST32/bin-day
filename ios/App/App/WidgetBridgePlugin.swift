import Capacitor
import Foundation
#if canImport(ActivityKit)
import ActivityKit
#endif

/// Shares upcoming collections with the widget extension and runs the bin-night Live Activity.
@objc(WidgetBridgePlugin)
public class WidgetBridgePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "WidgetBridgePlugin"
    public let jsName = "WidgetBridge"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "setData", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "takePendingPutOut", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "startBinNight", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "endBinNight", returnType: CAPPluginReturnPromise),
    ]

    @objc func setData(_ call: CAPPluginCall) {
        guard let json = call.getString("json") else {
            call.reject("json is required")
            return
        }
        BinShared.savePayload(json: json)
        call.resolve()
    }

    @objc func takePendingPutOut(_ call: CAPPluginCall) {
        call.resolve(["keys": BinShared.takePendingPutOut()])
    }

    @objc func startBinNight(_ call: CAPPluginCall) {
        guard let key = call.getString("key"), let title = call.getString("title") else {
            call.reject("key and title are required")
            return
        }
        let bins = call.getArray("bins", String.self) ?? []
        let until = call.getString("until").flatMap { ISO8601DateFormatter().date(from: $0) }

        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            Task {
                guard ActivityAuthorizationInfo().areActivitiesEnabled else {
                    call.resolve(["started": false])
                    return
                }
                for activity in Activity<BinNightAttributes>.activities {
                    if activity.attributes.key == key {
                        call.resolve(["started": false])
                        return
                    }
                    await activity.end(nil, dismissalPolicy: .immediate)
                }
                do {
                    _ = try Activity.request(
                        attributes: BinNightAttributes(key: key, title: title, bins: bins),
                        content: ActivityContent(state: .init(putOut: false), staleDate: until),
                        pushType: nil
                    )
                    call.resolve(["started": true])
                } catch {
                    call.reject("Could not start Live Activity", nil, error)
                }
            }
            return
        }
        #endif
        call.resolve(["started": false])
    }

    @objc func endBinNight(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            Task {
                for activity in Activity<BinNightAttributes>.activities {
                    await activity.end(nil, dismissalPolicy: .immediate)
                }
                call.resolve()
            }
            return
        }
        #endif
        call.resolve()
    }
}
