exports.config = {
  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_KEY,

    build: 'Sample Live Protractor Tests',
    name: 'Sample Protractor Local Testing',

    'browserstack.local': 'true',

    browserName: 'chrome'
  },
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['tests/spec.js']
};
