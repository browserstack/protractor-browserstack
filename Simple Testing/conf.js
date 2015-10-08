exports.config = {
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js'],

  capabilities: {
    browserName: 'Safari',
    browser_version: '8.0',
    os: 'OS X',
    os_version: 'Yosemite',
    resolution: '1024x768',
    build: 'Sample Protractor Tests',

    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_KEY
  }
};
