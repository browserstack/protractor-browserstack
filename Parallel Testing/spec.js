describe('search', function() {
  it('should search a keyword on google', function() {
    browser.driver
      .get('https://google.com')
      .then(function() {
        browser.driver
          .findElement(by.name('q'))
          .sendKeys('BrowserStack\n');
        browser.sleep(5000);
        browser.takeScreenshot();
      });
    browser.driver.getTitle().then(function(page_title) {
      expect(page_title.split('-')[0].trim()).toEqual('BrowserStack');
    });
  });
});
