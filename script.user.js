// ==UserScript==
// @name Pokaz-Odp_eDesk
// @namespace https://github.com/Ja-Tar/edesk-answers
// @homepageURL  https://github.com/Ja-Tar/edesk-answers
// @supportURL   https://github.com/Ja-Tar/edesk-answers/issues
// @updateURL    https://github.com/Ja-Tar/edesk-answers/raw/main/script.user.js
// @downloadURL  https://github.com/Ja-Tar/edesk-answers/raw/main/script.user.js
// @match https://edesk.pearson.pl/*
// @grant none
// @version 0.1.2
// ==/UserScript==

setTimeout(() => {
console.log("Załadowano!");

const iframeDocument = document.getElementById('content-iframe').contentWindow.document;

//Get the header container
var headerContainer = document.querySelector(".right-side-menu-container");

//Create the run script button
var runBtn = document.createElement("button");
runBtn.innerHTML = "Pokaż ODPOWIEDZI";
runBtn.style.backgroundColor = "green";
runBtn.style.color = "white";
runBtn.style.padding = "10px";
runBtn.style.marginLeft = "10px";

//Add the run script button to the header container
headerContainer.appendChild(runBtn);

//Add click event listener to run script button
runBtn.addEventListener("click", function() {
//Get the Show Answers button
var showAnswersBtn = iframeDocument.getElementById("Show_Answers1");

//Check if Show Answers button exists
if (showAnswersBtn) {
//Change visibility to visible
showAnswersBtn.style.visibility = "visible";
}
});
}, 6000);



