var site = 'NBA Info';
var salutation = 'Welcome to, ';
var greeting = salutation + site + '! Here is the latest in NBA Rankings.';
var WebInfoEl = document.getElementById('WebInfo');

WebInfoEl.textContent = greeting;

var numOfRanks = 5;
var quantity = 'Number of rankings';
var rank = quantity + ' todays is ' + numOfRanks;
var rankingsEl = document.getElementById('Rankings');

rankingsEl.textContent = rank;