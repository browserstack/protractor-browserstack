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

#### Run the tests

Local Testing requires a locally serving html server. The sample server can be started by executing

`npm start` in the `Local Testing` directory


Execute the following command to run the tests:

`npm test`

### How to specify the capabilities

The [Code Generator](https://www.browserstack.com/automate/node#setting-os-and-browser) can come in very handy when specifying the capabilities especially for mobile devices.

The latest version of protractor needs the ‘browserName’ capability mentioned for tests to be executed.
