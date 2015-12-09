exports.config = {
  browserstackUser: process.env.BROWSERSTACK_USERNAME,
  browserstackKey: process.env.BROWSERSTACK_KEY,
  specs: ['spec.js'],

  multiCapabilities: [
    {
        browserName: 'Chrome',
        browser_version: '36.0',
        os: 'Windows',
        os_version: '8.1',
        resolution: '1024x768',

        build: 'Sample Protractor Tests',
        name: 'Sample Parallel Protractor tests',

        'browserstack.debug': 'true'
    },
    {
        browserName: 'Safari',
        browser_version: '8.0',
        os: 'OS X',
        os_version: 'Yosemite',
        resolution: '1024x768',

        build: 'Sample Protractor Tests',
        name: 'Sample Parallel Protractor tests',

        'browserstack.debug': 'true'
    },
    {
        browserName: 'Firefox',
        browser_version: '30.0',
        os: 'Windows',
        os_version: '7',
        resolution: '1024x768',

        build: 'Sample Protractor Tests',
        name: 'Sample Parallel Protractor tests',

        'browserstack.debug': 'true'
    },
    {
        browserName: 'iPhone',
        platform: 'MAC',
        device: 'iPhone 5S',

        build: 'Sample Protractor Tests',
        name: 'Sample Parallel Protractor tests',

        'browserstack.debug': 'true'
    }
  ]
};
