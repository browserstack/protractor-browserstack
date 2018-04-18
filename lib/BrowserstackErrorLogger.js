const request = require('request');
class BrowserstackErrorLogger {
  constructor() {
    this.BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME';
    this.BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
    this.errors = [];
    this.sessionId = "";
  }

  buildErrorsRrport() {
    return JSON.stringify(this.errors);
  }

  setSessionId(sessionId) {
    this.sessionId = sessionId;
  }

  addError(title, error) {
    // this.errors.push({title, error});
    this.errors.push(title);
  }

  async reportErrors() {
    if (this.errors.length) {
      await request({
        uri: `https://${this.BROWSERSTACK_USERNAME}:${this.BROWSERSTACK_ACCESS_KEY}@api.browserstack.com/automate/sessions/${this.sessionId}.json`,
        method: 'PUT',
        form: {status: 'failed', reason: this.buildErrorsRrport()}
      });
    }
  }
}

module.exports = BrowserstackErrorLogger;