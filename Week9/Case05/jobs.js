"use strict";

function validateName(name) {
  const namePattern = /^[a-zA-Z\s]+$/;
  return namePattern.test(name);
}

function validateEmail(email) {
  const emailPattern = /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+){1,3}\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(email);
}

function validateStartDate(startDate) {
  const today = new Date().toISOString().split("T")[0];
  return startDate > today;
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const startDate = document.getElementById("start-date").value;

  if (!validateName(name)) {
    alert("Name can only contain alphabet characters and spaces.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  if (startDate && !validateStartDate(startDate)) {
    alert("Start date cannot be today or in the past.");
    return false;
  }
  return true;
}
