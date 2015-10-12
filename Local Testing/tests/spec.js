describe('test', function() {
  it('should display BrowserStack', function() {
    browser.get('http://localhost:3000/index.html');
    element(by.model('input')).sendKeys('Stack');
    expect(element(by.xpath('//h1')).getText()).toEqual('BrowserStack');
    browser.takeScreenshot();
  });
});
