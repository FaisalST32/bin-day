package io.zyur.bindicator;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.view.View;
import android.widget.RemoteViews;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Reads the data pushed by WidgetBridgePlugin and renders both home screen widgets. */
final class BinWidgets {

    private static final String PREFS = "bindicator.widgets";
    private static final String KEY_DATA = "widgetData";

    private static final int[] CELL_IDS = { R.id.cell0, R.id.cell1, R.id.cell2 };
    private static final int[] CELL_DATE_IDS = { R.id.cell0_date, R.id.cell1_date, R.id.cell2_date };
    private static final int[] CELL_DAYS_IDS = { R.id.cell0_days, R.id.cell1_days, R.id.cell2_days };
    private static final int[][] CELL_BIN_IDS = {
        { R.id.cell0_bin0, R.id.cell0_bin1, R.id.cell0_bin2 },
        { R.id.cell1_bin0, R.id.cell1_bin1, R.id.cell1_bin2 },
        { R.id.cell2_bin0, R.id.cell2_bin1, R.id.cell2_bin2 },
    };

    static final class Collection {
        final Date day;
        final List<String> bins;
        final boolean putOut;

        Collection(Date day, List<String> bins, boolean putOut) {
            this.day = day;
            this.bins = bins;
            this.putOut = putOut;
        }
    }

    private BinWidgets() {}

    static void saveData(Context context, String json) {
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putString(KEY_DATA, json).apply();
    }

    static void updateAll(Context context) {
        AppWidgetManager manager = AppWidgetManager.getInstance(context);
        updateNextBin(context, manager, manager.getAppWidgetIds(new ComponentName(context, NextBinWidgetProvider.class)));
        updateComingUp(context, manager, manager.getAppWidgetIds(new ComponentName(context, ComingUpWidgetProvider.class)));
    }

    private static JSONObject loadData(Context context) {
        String json = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString(KEY_DATA, null);
        if (json == null) return null;
        try {
            return new JSONObject(json);
        } catch (JSONException e) {
            return null;
        }
    }

    /** Collections from today onwards. */
    private static List<Collection> upcoming(JSONObject data) {
        List<Collection> result = new ArrayList<>();
        if (data == null) return result;
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd", Locale.UK);
        Date today = startOfDay(new Date());
        JSONArray items = data.optJSONArray("collections");
        if (items == null) return result;
        for (int i = 0; i < items.length(); i++) {
            JSONObject item = items.optJSONObject(i);
            if (item == null) continue;
            try {
                Date day = parser.parse(item.optString("date"));
                if (day == null || day.before(today)) continue;
                List<String> bins = new ArrayList<>();
                JSONArray binArray = item.optJSONArray("bins");
                if (binArray != null) {
                    for (int b = 0; b < binArray.length(); b++) bins.add(binArray.optString(b));
                }
                result.add(new Collection(day, bins, item.optBoolean("putOut")));
            } catch (ParseException ignored) {
                // Skip malformed dates.
            }
        }
        return result;
    }

    private static Date startOfDay(Date date) {
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.set(Calendar.HOUR_OF_DAY, 0);
        c.set(Calendar.MINUTE, 0);
        c.set(Calendar.SECOND, 0);
        c.set(Calendar.MILLISECOND, 0);
        return c.getTime();
    }

    private static int daysUntil(Date day) {
        long diff = startOfDay(day).getTime() - startOfDay(new Date()).getTime();
        return (int) Math.round(diff / 86_400_000.0);
    }

    private static String format(Date date, String pattern) {
        return new SimpleDateFormat(pattern, Locale.UK).format(date);
    }

    private static int binIcon(String kind) {
        switch (kind) {
            case "blue":
                return R.drawable.ic_bin_blue;
            case "brown":
                return R.drawable.ic_bin_brown;
            case "green":
                return R.drawable.ic_bin_green;
            default:
                return R.drawable.ic_bin_black;
        }
    }

    private static int binBackground(String kind) {
        switch (kind) {
            case "blue":
                return R.drawable.widget_bg_blue;
            case "brown":
                return R.drawable.widget_bg_brown;
            case "green":
                return R.drawable.widget_bg_green;
            default:
                return R.drawable.widget_bg_black;
        }
    }

    private static PendingIntent openApp(Context context) {
        Intent intent = new Intent(context, MainActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        return PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static void updateNextBin(Context context, AppWidgetManager manager, int[] ids) {
        if (ids.length == 0) return;
        List<Collection> collections = upcoming(loadData(context));
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_next_bin);
        views.setOnClickPendingIntent(R.id.widget_root, openApp(context));

        if (collections.isEmpty()) {
            views.setViewVisibility(R.id.content, View.GONE);
            views.setViewVisibility(R.id.empty, View.VISIBLE);
            views.setInt(R.id.widget_root, "setBackgroundResource", R.drawable.widget_card_bg);
        } else {
            Collection next = collections.get(0);
            String kind = next.bins.isEmpty() ? "black" : next.bins.get(0);
            int days = daysUntil(next.day);
            views.setViewVisibility(R.id.content, View.VISIBLE);
            views.setViewVisibility(R.id.empty, View.GONE);
            views.setInt(R.id.widget_root, "setBackgroundResource", binBackground(kind));
            views.setTextViewText(R.id.label, next.putOut ? "BIN OUT ✓" : "BIN DAY");
            views.setTextViewText(R.id.weekday, format(next.day, "EEE"));
            views.setTextViewText(R.id.date, format(next.day, "d MMM"));
            views.setTextViewText(R.id.relative, days == 0 ? "Today" : days == 1 ? "Tomorrow" : "in " + days + " days");
            views.setImageViewResource(R.id.bin0, R.drawable.ic_bin_light);
            if (next.bins.size() > 1) {
                views.setViewVisibility(R.id.bin1, View.VISIBLE);
                views.setImageViewResource(R.id.bin1, binIcon(next.bins.get(1)));
            } else {
                views.setViewVisibility(R.id.bin1, View.GONE);
            }
        }
        for (int id : ids) manager.updateAppWidget(id, views);
    }

    static void updateComingUp(Context context, AppWidgetManager manager, int[] ids) {
        if (ids.length == 0) return;
        JSONObject data = loadData(context);
        List<Collection> collections = upcoming(data);
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_coming_up);
        views.setOnClickPendingIntent(R.id.widget_root, openApp(context));
        views.setTextViewText(R.id.code, data == null ? "" : data.optString("code"));

        boolean empty = collections.isEmpty();
        views.setViewVisibility(R.id.cells, empty ? View.GONE : View.VISIBLE);
        views.setViewVisibility(R.id.empty, empty ? View.VISIBLE : View.GONE);

        for (int i = 0; i < CELL_IDS.length; i++) {
            if (i >= collections.size()) {
                views.setViewVisibility(CELL_IDS[i], View.INVISIBLE);
                continue;
            }
            Collection c = collections.get(i);
            int days = daysUntil(c.day);
            views.setViewVisibility(CELL_IDS[i], View.VISIBLE);
            views.setTextViewText(CELL_DATE_IDS[i], format(c.day, "EEE d MMM").toUpperCase(Locale.UK));
            views.setTextViewText(CELL_DAYS_IDS[i], days == 0 ? "Today" : days == 1 ? "Tomorrow" : days + " days");
            for (int b = 0; b < CELL_BIN_IDS[i].length; b++) {
                if (b < c.bins.size()) {
                    views.setViewVisibility(CELL_BIN_IDS[i][b], View.VISIBLE);
                    views.setImageViewResource(CELL_BIN_IDS[i][b], binIcon(c.bins.get(b)));
                } else {
                    views.setViewVisibility(CELL_BIN_IDS[i][b], View.GONE);
                }
            }
        }
        for (int id : ids) manager.updateAppWidget(id, views);
    }
}
