## Usage

### Prerequisites

Node and npm

### Install protractor

`npm install -g protractor`

### BrowserSack Authentication

Export the environment variables for the username and access key of your BrowserStack account.
These can be found on the automate accounts page on [BrowserStack](https://www.browserstack.com/accounts/automate)

`export BROWSERSTACK_USERNAME=<browserstack-username>`

`export BROWSERSTACK_KEY=<browserstack-access-key>`

### Setting up local tunnel

Download the BrowserStackLocal Binary as instructed [here](https://www.browserstack.com/automate/node#setting-local-tunnel).
Keep the tunnel running locally.

`path/to/BrowserStackLocal $BROWSERSTACK_KEY localhost,3000,0`

### Serve the html files

Run a local server which will serve the html files in `app` directory on localhost port 8000 for testing.
A simple way to do this is to run a simple python server locally.

`cd app/ && python -m SimpleHTTPServer'

### Run tests

In the `Local Testing` folder, run

`protractor conf.js`
