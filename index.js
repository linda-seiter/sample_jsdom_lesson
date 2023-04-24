document.getElementById("cityButton").addEventListener("click", styleCity);
document.getElementById("stateButton").addEventListener("click", displayState);

function styleCity() {
  const cityP = document.getElementById("city"); //paragraph element
  cityP.style.background = "pink";
  cityP.style.color = "white";
  cityP.style.padding = "1em";
  cityP.style.border = "5px solid green";
}

function displayState() {
  const stateP = document.getElementById("state"); //paragraph element
  stateP.textContent = "Massachusetts";
}
