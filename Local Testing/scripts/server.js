var express = require('express');

var testApp = express();
testApp.use(express.static(__dirname + '/../public'));

testApp.listen(3000);
