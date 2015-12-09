exports.config = {
  specs: ['spec.js'],

  capabilities: {
    browserName: 'Safari',
    browser_version: '8.0',
    os: 'OS X',
    os_version: 'Yosemite',
    resolution: '1024x768',

    build: 'Sample Protractor Tests',
    name: 'Sample Live Protractor Tests'
  },

  browserstackUser: process.env.BROWSERSTACK_USERNAME,
  browserstackKey: process.env.BROWSERSTACK_KEY
};
