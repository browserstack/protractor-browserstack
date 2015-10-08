# Protractor-Browserstack

Execute [Protractor](https://github.com/angular/protractor) scripts on BrowserStack. 

## Usage

For local testing, follow the instructions in `Local Testing/README`

### Prerequisites

Node and npm

[Latest `protractor` release requires node v0.12 and up](https://github.com/angular/protractor/issues/2588)

### Install protractor

`npm install -g protractor`

### Clone the repo

`git clone https://github.com/browserstack/protractor-browserstack.git`

`cd protractor-browserstack`

### BrowserSack Authentication

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate)

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_KEY=<browserstack-access-key>`

#### To execute Protractor test on a single browser - OS combination

Execute the following command:

`protractor Simple\ Testing/conf.js`

#### To execute Protractor test on a multiple browser - OS combinations

To execute the test on differnt browser and OS combinations in parallel,
you need to use `'multiCapabilities'` as given in conf.js file.
Then simply execute the command:

`protractor Parallel\ Testing/conf.js`

### How to specify the capabilities

The [Code Generator](https://www.browserstack.com/automate/node#setting-os-and-browser) can come in very handy when specifying the capabilities especially for mobile devices.

The latest version of protractor needs the ‘browserName’ capability mentioned for tests to be executed.
