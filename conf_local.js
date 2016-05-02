exports.config = {
  specs: [ 'specs/spec.js' ],
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_KEY,

    build: 'Sample Protractor Tests',
    name: 'Sample Protractor Local Testing',

    'browserstack.local': 'true',

    browserName: 'chrome'
  }
};
