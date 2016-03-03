// .querySelector selects the first the first instance of the "item".  Can be an element,
//  .class or #Id etc...
var article = document.querySelector("article");
var h1Title = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var addColorButton = document.getElementById("add-color");
var makeLargeButton = document.getElementById("make-large");
var addBorderButton = document.getElementById("add-border");
var addRoundingButton = document.getElementById("add-rounding");
var outputTarget = document.getElementById("output-target");
var guineaPigDisplay = document.getElementById("guinea-pig");

// This just adds a single event listener to the article tag.  We will use this to detect
//  any clicks on it's section children
article.addEventListener("click", printSection);

// .target is what was actually clicked, .currentTarget is what the event listener is tied to
//  the .stopPropagation() method, kills the bubbling of the click event.
function printSection(theParent) {
  if (theParent.target !== theParent.currentTarget) {
    outputTarget.textContent = "You clicked on the " + theParent.target.textContent + " section";
  };
  theParent.stopPropagation();
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

