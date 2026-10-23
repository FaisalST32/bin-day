package io.zyur.bindicator;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** Shares upcoming collections with the home screen widgets. Live Activities are iOS only. */
@CapacitorPlugin(name = "WidgetBridge")
public class WidgetBridgePlugin extends Plugin {

    @PluginMethod
    public void setData(PluginCall call) {
        String json = call.getString("json");
        if (json == null) {
            call.reject("json is required");
            return;
        }
        BinWidgets.saveData(getContext(), json);
        BinWidgets.updateAll(getContext());
        call.resolve();
    }

    @PluginMethod
    public void takePendingPutOut(PluginCall call) {
        JSObject result = new JSObject();
        result.put("keys", new JSArray());
        call.resolve(result);
    }

    @PluginMethod
    public void startBinNight(PluginCall call) {
        JSObject result = new JSObject();
        result.put("started", false);
        call.resolve(result);
    }

    @PluginMethod
    public void endBinNight(PluginCall call) {
        call.resolve();
    }
}
