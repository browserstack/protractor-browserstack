describe('search', function() {
  it('should search a keyword on google', function() {
    browser.get('http://127.0.0.1:8000/index.html');
    element(by.model('input')).sendKeys('Stack');
    expect(element(by.xpath('//h1')).getText()).toEqual('BrowserStack');
    browser.takeScreenshot();
  });
});
