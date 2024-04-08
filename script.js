let modal = document.getElementById("modal");
modal.showModal(); // uncomment this line to show the modal

let submitButton = document.getElementById("submit-button");
let textareaEntry = document.getElementById("textarea-entry");
let textOutput = document.getElementById("text-output");

function transferText() {
  textOutput.innerText = textareaEntry.value;
  let checkedRadio = document.querySelector("input[type='radio']:checked");
  console.log(checkedRadio.value); // log the value of the checked radio button
}

submitButton.addEventListener("click", transferText);
