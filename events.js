var sections = document.getElementsByClassName("article-section");
var h1Title = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var addColorButton = document.getElementById("add-color");
var makeLargeButton = document.getElementById("make-large");
var addBorderButton = document.getElementById("add-border");
var addRoundingButton = document.getElementById("add-rounding");
var outputTarget = document.getElementById("output-target");
var guineaPigDisplay = document.getElementById("guinea-pig");

// The returned function is called a closure, "a closure is nothing but a data structure 
//  storing a function together with an environment, which maps all associating each free 
//  variables of the function (that are used locally, but defined in an enclosing scope) 
//  with the value or storage location the name was bound to at the time the closure was 
//  created".
function reportSectionClicked(sectionArrayElement) {
  return function() {
    outputTarget.textContent = "You clicked on the " + sections[sectionArrayElement].textContent + " section";
  }
}

// Event listeners for click of any section
for (var i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click", reportSectionClicked(i));
}

// Event listener for mouseenter on h1 tag
h1Title.addEventListener("mouseover", function() {
  outputTarget.textContent = "You moved your mouse over the header!";
});

// Event listener for mouseleave on h1 tag
h1Title.addEventListener("mouseout", function() {
  outputTarget.textContent = "You left me!!";
});

// Event listener for input on keypress-input
inputField.addEventListener("input", function() {
  outputTarget.textContent = inputField.value;
});

// Event listener for click of add-color
addColorButton.addEventListener("click", function() {
  guineaPigDisplay.className = "";
  guineaPigDisplay.classList.add("blue-color");
});

// Event listener for click of make-large
makeLargeButton.addEventListener("click", function() {
  guineaPigDisplay.className = "";
  guineaPigDisplay.classList.add("bigger-font");
});

// Event listener for click of add-border
addBorderButton.addEventListener("click", function() {
  guineaPigDisplay.className = "";
  guineaPigDisplay.classList.add("new-border");
});

// Event listener for click of add-rounding
addRoundingButton.addEventListener("click", function() {
  guineaPigDisplay.className = "";
  guineaPigDisplay.classList.add("new-border");
  guineaPigDisplay.classList.add("new-rounding");
});

