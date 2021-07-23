const { browser } = require("protractor");

describe("Google's Search Functionality", function () {
  it("can find search results", async function () {
    await browser.driver.get("https://google.com/ncr");
    await browser.driver.findElement(by.name("q")).sendKeys("BrowserStack", protractor.Key.ENTER); // this submits on desktop browsers
    try {
      await browser.wait(protractor.ExpectedConditions.titleContains("Search"), 1000);
    } catch (e) {
      await browser.driver.findElement(by.name("q")).submit(); // this helps in mobile browsers
    }
    await browser.wait(protractor.ExpectedConditions.titleContains("Search"), 1000);
    await expect(browser.driver.getTitle()).toMatch(/BrowserStack/i);
  });
});
