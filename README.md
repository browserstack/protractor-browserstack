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

### BrowserStack Authentication

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate)

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>`

### Run the tests

 - To start a single test run: `npm test` or `npm run test_single`
 - To start parallel tests run: `npm run test_parallel`
 - To start local tests run: `npm run test_local`

------

#### How to specify the capabilities

The [Code Generator](https://www.browserstack.com/automate/node#setting-os-and-browser) can come in very handy when specifying the capabilities especially for mobile devices.

The latest version of protractor needs the ‘browserName’ capability mentioned for tests to be executed.
