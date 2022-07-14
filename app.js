var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#english-text");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function urlConstructor(text) {
  return serverURL + "?text=" + text;
}

urlConstructor("parth");

function doFetch(text) {
  fetch(urlConstructor(text))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerText = json.contents.translated))
    .catch((error) => {
      console.log("An Error Occured: " + error);
      alert("Some error occured, please try after some time");
    });
}

buttonTranslate.addEventListener("click", function clickEventHandler() {
  doFetch(txtInput.value);
});
