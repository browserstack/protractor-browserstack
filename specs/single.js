describe('Google\'s Search Functionality', function() {
  it('can find search results', function() {
    browser.ignoreSynchronization = true;
    
    browser.get('https://google.com/ncr');
    element(by.name('q')).sendKeys('BrowserStack').submit();
    expect(browser.getTitle()).toEqual('BrowserStack - Google Search');
  });
});
