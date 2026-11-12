const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const [f, out] of [['audit', 'ISC-Signed-Case-Marketing-Audit'], ['intake', 'ISC-Intake-Revenue-Scorecard'], ['speed', 'ISC-Speed-to-Lead-Playbook']]) {
    await p.goto('file://' + path.resolve(__dirname, f + '.html'));
    await p.evaluate(() => document.fonts.ready);
    await p.pdf({ path: path.resolve(__dirname, out + '.pdf'), format: 'Letter', printBackground: true, preferCSSPageSize: true });
    await p.setViewportSize({ width: 816, height: 1056 });
    await p.screenshot({ path: path.resolve(__dirname, '..', '..', '..', 'tmp-' + f + '.png') }).catch(() => {});
  }
  await b.close();
})();
