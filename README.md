# Protractor-Browserstack
Execute [Protractor](https://github.com/angular/protractor) scripts on BrowserStack. 

##How to run

- git clone `https://github.com/UmangSardesai/Protractor-Browserstack.git`
- `cd Protractor-Browserstack`
- `npm install Protractor`
- Enter Username and Automate key in 'conf1.js' and 'conf2.js'
- `cd examples` 

To execute the Protractor test on a single browser - OS combination on BrowserStack, execute the following command:

`protractor conf1.js`

###How to run in parallel

To execute the test on differnt browser and OS combinations in parallel, you need to use `'multiCapabilities'` as given in conf2.js file. Then simply execute the command:

`protractor conf2.js`

###How to specify the capabilities

The [Code Generator](https://www.browserstack.com/automate/node#setting-os-and-browser) can come in very handy when specifying the capabilities especially for mobile devices. 

However, users have been facing issues when specifying the 'browser' capablities. The general notation to be followed is:

- For desktop browsers —> ‘browser’.
- For mobile devices —> ‘browserName’.

Though ‘browserName’ capability also works for desktop, we recommend users to stick to the above mentioned capabilities.

Coming to using Protractor, for the older version, tests work fine with the ‘browser’ capability. However, for the latest version, it seems you need the ‘browserName’ capability for tests to be executed on BrowserStack. This is something that is implemented by Protractor framework, while running its tests.

