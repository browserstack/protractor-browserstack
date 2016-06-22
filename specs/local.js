describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function() {
    browser.ignoreSynchronization = true;
    
    browser.get('http://bs-local.com:45691/check');
    expect(browser.getPageSource()).toMatch(/Up and running/i);
  });
});

