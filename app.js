var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#english-text");

buttonTranslate.addEventListener("click", function clickEventHandler() {
  console.log("clicked");
  console.log(txtInput.value);
});
