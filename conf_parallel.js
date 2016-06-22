exports.config = {
  'specs': [ 'specs/single.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'commonCapabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'build': 'protractor-browserstack',
    'name': 'parallel_test',
    'browserstack.debug': 'true'
  },

  'multiCapabilities': [{
    'browserName': 'Chrome'
  },{
    'browserName': 'Safari'
  },{
    'browserName': 'Firefox'
  },{
    'browserName': 'IE'
  }]
};

exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = exports.config.commonCapabilities[i];
});
