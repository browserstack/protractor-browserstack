# Protractor-Browserstack

Execute [Protractor](https://github.com/angular/protractor) scripts on BrowserStack.

## Usage

### Prerequisites

Node and npm

### Clone the repo

`git clone https://github.com/browserstack/protractor-browserstack.git`

### Install dependencies

Navigate to appropriate directory for testing and then install the dependencies by running

`npm install`

### BrowserSack Authentication

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate)

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_KEY=<browserstack-access-key>`

### Run the tests

Local Testing requires a locally serving html server. The sample server can be started by executing

`npm start` in the `Local Testing` directory


Execute the following command to run the tests:

`npm test`

------

#### How to specify the capabilities

The [Code Generator](https://www.browserstack.com/automate/node#setting-os-and-browser) can come in very handy when specifying the capabilities especially for mobile devices.

The latest version of protractor needs the ‘browserName’ capability mentioned for tests to be executed.

------

**Note that for some Safari Browsers on Mac, testing angular pages may not work.**

There is an [open issue](https://github.com/angular/protractor/issues/2111) in protractor concerning this. Known quick Fixes are -

1. To use `'browserstack.selenium_version': '2.43.1',` in the capabilities in the protractor config file (Works for Safari versions lower than 6.2)

2. To change `resetUrl` in protractor.js to a valid html page or use the protractor clone/fixes mentioned in the issue
