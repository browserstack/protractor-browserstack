var BrowserstackErrorReporter = require('../lib/BrowserstackErrorReporter');

jasmine.getEnv().addReporter({
  specStarted(result) {
    jasmine.getEnv().currentSpec = result;
  },
  specDone() {
    jasmine.getEnv().currentSpec = null;
  }
});

describe('Reporting to BrowserStack that test failed with reason', function() {

  const reporter = new BrowserstackErrorReporter();
  beforeAll(async () => {
    await protractor.browser.driver.getSession().then((session) => {
      reporter.setSessionId(session['id_']);
    });
  });

  afterEach(function () {
    let failedExpectations = jasmine.getEnv().currentSpec.failedExpectations;
    if (failedExpectations.length) {
      failedExpectations.forEach(f => reporter.addError(f.message, f.stack));
    }
  });

  afterAll(async () => {
    return reporter.reportErrors();
  });

  it('should fail and report reason to browserstack', function() {
    expect(true).toBe(false);
  });

  it('should not fail and will not be reported to browserstack', function() {
    expect(true).toBe(true);
  });
});
