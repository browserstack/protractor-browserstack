describe('Google\'s Search Functionality', function() {
  it('can find search results', function() {
    browser.driver.get('https://google.com/ncr').then(function() {
      browser.driver.findElement(by.name('q')).sendKeys('BrowserStack').then(function() {
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
          browser.driver.wait(function() {
            return browser.driver.findElements(by.id('resultStats')).then(function(elems) {
              return elems.length > 0;
            });
          });
          expect(browser.driver.getTitle()).toEqual('BrowserStack - Google Search');
        });
      });
    });
  });
});
