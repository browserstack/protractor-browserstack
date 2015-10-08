// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js'],

//Capabilities to be passed to the webdriver instance.
  capabilities: 
  {
    'browserName' : 'Safari',
    'browser_version' : '8.0',
    'os': 'OS X',
    'os_version': 'Yosemite',
    'resolution': '1024x768',
    'build':'Sample Protractor Tests',
    'browserstack.user': '',
    'browserstack.key': ''
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
