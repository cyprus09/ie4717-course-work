function toggleInput(checkBoxId, inputId) {
  const checkbox = document.getElementById(checkBoxId);
  const input = document.getElementById(inputId);
  input.style.display = checkbox.checked ? "inline" : "none";
}

function toggleInputs(checkBoxId, inputId1, inputId2) {
  const checkbox = document.getElementById(checkBoxId);
  const input1 = document.getElementById(inputId1);
  const input2 = document.getElementById(inputId2);
  input1.style.display = checkbox.checked ? "inline" : "none";
  input2.style.display = checkbox.checked ? "inline" : "none";
}
