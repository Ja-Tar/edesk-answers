// ==UserScript==
// @name PokazOdp-eDesk
// @namespace Violentmonkey Scripts
// @match https://edesk.pearson.pl/*
// @grant none
// ==/UserScript==

setTimeout(() => {
console.log("Załadowano!");

const iframeDocument = document.getElementById('content-iframe').contentWindow.document;

//Get the header container
var headerContainer = document.querySelector(".header-container.mdl-layout__header-row");

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



