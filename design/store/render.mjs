// Renders store.html to PNGs at each store's required size.
// Usage: node render.mjs [device] [slide]   (run from design/store, needs playwright-core and Google Chrome)
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const page = pathToFileURL(join(here, 'store.html')).href;

const DEVICES = {
	iphone: { width: 440, height: 956, scale: 3, slides: ['today', 'reminders', 'binnight', 'widgets', 'schedule', 'setup'] }, // 1320x2868
	ipad: { width: 1032, height: 1376, scale: 2, slides: ['today', 'reminders', 'binnight', 'schedule', 'setup'] }, // 2064x2752
	play: { width: 360, height: 640, scale: 3, slides: ['today', 'reminders', 'binnight', 'widgets', 'schedule', 'setup'] }, // 1080x1920
	feature: { width: 512, height: 250, scale: 2, slides: ['feature'] }, // 1024x500
};

const [onlyDevice, onlySlide] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [device, d] of Object.entries(DEVICES)) {
	if (onlyDevice && onlyDevice !== device) continue;
	const out = join(here, 'out', device);
	mkdirSync(out, { recursive: true });
	const ctx = await browser.newContext({ viewport: { width: d.width, height: d.height }, deviceScaleFactor: d.scale });
	const tab = await ctx.newPage();
	for (const [i, slide] of d.slides.entries()) {
		if (onlySlide && onlySlide !== slide) continue;
		await tab.goto(`${page}?device=${device}&slide=${slide}`);
		await tab.waitForLoadState('networkidle');
		await tab.waitForTimeout(300);
		const file = join(out, `${i + 1}-${slide}.png`);
		await tab.screenshot({ path: file });
		console.log(file.replace(here + '/', ''));
	}
	await ctx.close();
}
await browser.close();
