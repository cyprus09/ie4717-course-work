function toggleInput(checkBoxId, inputId) {
  const checkbox = document.getElementById(checkBoxId);
  const input = document.getElementById(inputId);
  if(checkbox.checked) {
    input.style.display = "inline";
    input.disabled = false;
  } else {
    input.style.display = "none";
    input.disabled = true;
  }
}

function toggleInputs(checkBoxId, inputId1, inputId2) {
  const checkbox = document.getElementById(checkBoxId);
  const input1 = document.getElementById(inputId1);
  const input2 = document.getElementById(inputId2);
  if(checkbox.checked) {
    input1.style.display = "inline";
    input2.style.display = "inline";
    input1.disabled = false;
    input2.disabled = false;
  } else {
    input1.style.display = "none";
    input2.style.display = "none";
    input1.disabled = true;
    input2.disabled = true;
  }
}
