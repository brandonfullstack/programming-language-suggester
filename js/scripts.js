// Date value
const startDate = document.getElementById("startDate").value;

// Color value
const phoneColor = document.getElementById("phoneColor").value;

// Input value
const favoriteNumber = document.getElementById("favoriteNumber").value;

// Select boxes value
function handleSelect(event) {
  event.preventDefault();
  const animalPetted = document.getElementById("animalPetted").value;
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

// Radio button value
function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
