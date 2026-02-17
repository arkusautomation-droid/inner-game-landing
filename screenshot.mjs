import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

// Hero section
await page.screenshot({ path: '/tmp/landing-hero.png', fullPage: false });
console.log('Hero screenshot saved');

// Full page
await page.screenshot({ path: '/tmp/landing-full.png', fullPage: true });
console.log('Full page screenshot saved');

// Scroll to problem section
await page.evaluate(() => window.scrollBy(0, window.innerHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/landing-problem.png', fullPage: false });
console.log('Problem section screenshot saved');

// Scroll to solution
await page.evaluate(() => window.scrollBy(0, window.innerHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/landing-solution.png', fullPage: false });
console.log('Solution section screenshot saved');

// Scroll to chapters
await page.evaluate(() => document.querySelector('#chapters')?.scrollIntoView());
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/landing-chapters.png', fullPage: false });
console.log('Chapters section screenshot saved');

// Scroll to CTA
await page.evaluate(() => document.querySelector('#get-book')?.scrollIntoView());
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/landing-cta.png', fullPage: false });
console.log('CTA section screenshot saved');

await browser.close();
