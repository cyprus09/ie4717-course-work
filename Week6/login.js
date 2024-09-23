
// function validateForm called upon submit to validate the input value checks
function validateForm() {
  "use strict";
  
  // get the references to the form elements
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  // validate
  if (email.value.length > 0 && password.value.length > 0) {
    return true;
  } else {
    alert("Please complete the form!");
    return false;
  }
}

// function called when the window has loaded, needs to add an event listener to the form
function init() {
  'use strict'

  // confirm the document.getElementById() can be used
  if(document && document.getElementById) {
    var loginForm = document.getElementById('loginForm')
    loginForm.onsubmit = validateForm
  }
}

window.onload = init