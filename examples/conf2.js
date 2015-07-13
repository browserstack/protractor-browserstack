// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js'],

multiCapabilities: [
{
    'browserName' : 'Chrome',
    'browser_version' : '36.0',
    'os': 'Windows',
    'os_version': '8.1',
    'resolution': '1024x768',
    'build':'Sample Protractor Tests',
    'browserstack.debug' : 'true',
    'browserstack.user': '',
    'browserstack.key': ''
},
{
    'browserName' : 'Safari',
    'browser_version' : '8.0',
    'os': 'OS X',
    'os_version': 'Yosemite',
    'resolution': '1024x768',
    'build':'Sample Protractor Tests',
    'browserstack.debug' : 'true',
    'browserstack.user': '',
    'browserstack.key': ''
},
{
    'browserName' : 'Firefox',
    'browser_version' : '30.0',
    'os': 'Windows',
    'os_version': '7',
    'resolution': '1024x768',
    'build':'Sample Protractor Tests',
    'browserstack.debug' : 'true',
    'browserstack.user': '',
    'browserstack.key': ''
},
{
    'browserName' : 'iPhone',
    'platform' : 'MAC',
    'device': 'iPhone 5S',
    'build':'Sample Protractor Tests',
    'browserstack.debug' : 'true',
    'browserstack.user': '',
    'browserstack.key': ''
}
],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
