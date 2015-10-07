exports.config = {
  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_KEY,

    build: 'build',

    'browserstack.local': 'true',

    browserName: 'Chrome'
  },
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: ['spec.js']
};
