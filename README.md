# protractor-browserstack with marking tests as passed/failed with reason 

####The incentive behind this fork is to demonstrate how to mark tests as passed/ failed in browserstack. <br/>Browserstack's current documentation does not allow you to do so. So even if your test fails it will be marked as passed (green) on browserstack.<br/><br/>In addition, there is an example of how to update the reason for the test's failure using browserstack rest api. see 'single_failed.js'

[Protractor](https://github.com/angular/protractor/) Integration with BrowserStack.

Mark tests as passed/failed in Browserstack

Report reason for failed test to Browserstack

Report failed expectations to Browserstack

Upgrade to support Protractor 5   

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src ="http://nchaulet.github.io/slide-protractor-lyonjs/images/protractor-logo.png" height = "100">

## Setup

* Clone the repo
* Install dependencies `npm install`
* Update `*.conf.js` files inside the `conf/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)

## Running your tests
* To run a single test, run `npm run single`
* To run a single test that will report the reason for failed tests to browserstack, run `npm run single_failed`
* To run local tests, run `npm run local`
* To run parallel tests, run `npm run parallel`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
