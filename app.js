"use strict";

var myDateOfBirth = '28.01.1980';
var formattedDate = moment(myDateOfBirth, 'DD.MM.YYYY').format('MMMM Do YYYY');
var p = document.querySelector('.myB-day');
p.textContent = "I was born on ".concat(formattedDate, ".");
var inputUserBday = document.querySelector('#userB-day');
inputUserBday.addEventListener('input', function (event) {
  var message = document.querySelector('[role="alert"]');
  if (/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/.test(event.target.value)) {
    var userFormattedDate = moment(event.target.value, 'DD.MM.YYYY').format('MMMM Do YYYY');
    message.className = '';
    message.classList.add("alert", "alert-success");
    message.textContent = "You were born on ".concat(userFormattedDate);
  } else {
    message.classList.add("alert", "alert-danger");
    message.textContent = 'The date entered is incorrect';
  }
});