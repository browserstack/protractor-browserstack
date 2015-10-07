## Usage

### Prerequisites

Node and npm

### Clone this repo

`git clone https://github.com/vedharish/protractor-browserstack.git`

`cd protractor-browserstack`

### Install protractor

`npm install -g protractor`

### BrowserSack Authentication

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate)

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_KEY=<browserstack-access-key>`

### Setting up local tunnel

Download the BrowserStackLocal Binary as instructed [here](https://www.browserstack.com/automate/node#Setting%20up%20Local%20Testing). Run the binary locally.

`path/to/BrowserStackLocal $BROWSERSTACK_KEY localhost,3000,0`

### Run tests

`protractor conf.js`
