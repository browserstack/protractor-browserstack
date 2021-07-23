describe("Google's Search Functionality", function () {
  it("can find search results", async function () {
    await browser.driver.get("https://google.com/ncr");
    const searchBox = await browser.driver.findElement(by.name("q"));
    await searchBox.sendKeys("BrowserStack", protractor.Key.ENTER); // this submits on desktop browsers
    try {
      await browser.wait(async () => {
        return /BrowserStack/i.test(await browser.driver.getTitle());
      }, 1000);
    } catch (e) {
      await searchBox.submit(); // this helps in mobile browsers
    }
    await browser.wait(async () => {
      return /BrowserStack/i.test(await browser.driver.getTitle());
    }, 1000);
    expect(await browser.driver.getTitle()).toMatch(/BrowserStack/i);
  });
});
