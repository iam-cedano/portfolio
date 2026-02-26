const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to mobile size (iPhone SE)
  await page.setViewportSize({ width: 375, height: 667 });

  try {
    console.log('Navigating to http://localhost:3002/en...');
    await page.goto('http://localhost:3002/en', { waitUntil: 'networkidle' });

    // Verify desktop nav is hidden
    const desktopNav = await page.$('nav.hidden.md\\:flex');
    if (await desktopNav.isVisible()) {
        console.error('Error: Desktop nav should be hidden on mobile');
        process.exit(1);
    }
    console.log('Desktop nav is hidden.');

    // Verify hamburger button is visible
    const toggleButton = await page.getByLabel('Toggle menu');
    if (!(await toggleButton.isVisible())) {
        console.error('Error: Toggle button not visible');
        process.exit(1);
    }
    console.log('Hamburger button is visible.');

    // Click to open menu
    await toggleButton.click();
    console.log('Clicked toggle button.');

    // Wait for menu to appear
    const mobileMenu = await page.locator('.md\\:hidden.absolute');
    await mobileMenu.waitFor({ state: 'visible' });
    console.log('Mobile menu is visible.');

    // Verify links in mobile menu
    const homeLink = mobileMenu.getByText('Home');
    if (await homeLink.isVisible()) {
        console.log('Home link found in mobile menu.');
    } else {
        console.error('Error: Home link not found in mobile menu');
    }

    // Take screenshot
    const screenshotPath = path.resolve('mobile_menu_verification.png');
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved to ${screenshotPath}`);

  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
