describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function() {
    browser.driver.get('http://bs-local.com:45691/check').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Up and running/i);
    });
  });
});

