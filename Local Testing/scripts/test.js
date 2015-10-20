var BrowserStackTunnel = require('browserstacktunnel-wrapper');
var protractor = require('protractor');
var child_process = require('child_process');

var browserStackTunnel = new BrowserStackTunnel({
  key: process.env.BROWSERSTACK_KEY,
  hosts: [{
    name: 'localhost',
    port: 3000,
    sslFlag: 0
  }]
});

browserStackTunnel.start(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected. Now testing...');

    child = child_process.execSync('./node_modules/.bin/protractor conf.js', { stdio: [ 0, 0, 0 ] });

    child.on('exit', function() {
      server.close();

      browserStackTunnel.stop(function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Tunnel stopped.');
        }
      });

      exit(0);
    })
  }
});
