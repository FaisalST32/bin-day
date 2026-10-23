// Captures real app screens from the dev server at iPhone resolution.
// Usage: node capture.mjs <name> <path> [now] [dark] [width] [height]
import { chromium } from 'playwright-core';

const shots = JSON.parse(process.argv[2]);
const settings = {
	code: 'FRIDDG',
	name: 'Sam',
	reminders: {
		nightBefore: { enabled: true, time: '20:00' },
		morningOf: { enabled: false, time: '06:30' },
		bins: { black: true, blue: true, brown: true, green: true },
		holidayChanges: true,
	},
	putOut: [],
};

const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const s of shots) {
	const ctx = await browser.newContext({
		viewport: { width: s.width ?? 440, height: s.height ?? 956 },
		deviceScaleFactor: s.scale ?? 3,
		colorScheme: s.dark ? 'dark' : 'light',
		isMobile: true,
		hasTouch: true,
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
	});
	await ctx.addInitScript(
		([value, extra]) => {
			if (!sessionStorage.getItem('seeded')) {
				localStorage.clear();
				if (value) localStorage.setItem('bindicator.settings.v2', value);
				sessionStorage.setItem('seeded', '1');
			}
			Object.assign(window, extra ?? {});
		},
		[s.settings === null ? '' : JSON.stringify({ ...settings, ...(s.settings ?? {}) }), s.extra]
	);
	const page = await ctx.newPage();
	const url = `http://localhost:5180${s.path}${s.now ? `${s.path.includes('?') ? '&' : '?'}now=${encodeURIComponent(s.now)}` : ''}`;
	await page.goto(url, { waitUntil: 'networkidle' });
	await page.waitForTimeout(s.wait ?? 1200);
	for (const step of s.steps ?? []) {
		if (step.click) await page.locator(step.click).first().click();
		if (step.fill) await page.locator(step.fill[0]).first().fill(step.fill[1]);
		if (step.eval) await page.evaluate(step.eval);
		await page.waitForTimeout(step.wait ?? 600);
	}
	await page.screenshot({ path: s.out });
	console.log('saved', s.out);
	await ctx.close();
}
await browser.close();
