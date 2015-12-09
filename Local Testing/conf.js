exports.config = {
  browserstackUser: process.env.BROWSERSTACK_USERNAME,
  browserstackKey: process.env.BROWSERSTACK_KEY,

  capabilities: {
    build: 'Sample Local Protractor Tests',
    name: 'Sample Protractor Local Testing',

    'browserstack.local': 'true',

    browserName: 'chrome'
  },

  specs: ['tests/spec.js']
};
