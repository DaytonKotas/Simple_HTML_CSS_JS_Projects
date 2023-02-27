//Welcome message

var user = 'Dayton';
var salutation = 'Hello,  ';
var greeting = salutation + user + '! Here are the latest Yeti reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Product price
var price = 20;
    studentDiscount= .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);