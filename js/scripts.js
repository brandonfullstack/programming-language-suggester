function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("go").setAttribute("class", "hidden");
}

function hexToNumber(color) {
  const colorNumberString = color.substr(4, 1);
  return parseInt(colorNumberString, 16);
}

function dateToNumber(date) {
  const dateNumberString = date.substr(5);
  return parseInt(dateNumberString, 16);
}

window.onload = function () {
  const form = document.querySelector("form");

  function resetForm() {
    form.reset();
    document.getElementById("error-message").classList.add("hidden");
  }

  document.getElementById("resetFormButton").addEventListener("click", (event) => {
    resetForm();
    console.log("anything");
  })
  hideResultsAndError();

  form.onsubmit = function (event) {
    event.preventDefault();
    hideResultsAndError();
    const startDateNumber = dateToNumber(document.getElementById("startDate").value);
    const phoneColorNumber = hexToNumber(document.getElementById("phoneColor").value);
    const favoriteNumber = parseInt(document.getElementById("favoriteNumber").value);
    const animalPettedNumber = parseInt(document.getElementById("animalPetted").value);
    const surveySelectionNumber = parseInt(document.querySelector("input[name='survey']:checked")?.value);

    const totalNumber = startDateNumber + phoneColorNumber + favoriteNumber + animalPettedNumber + surveySelectionNumber;

    if (!startDateNumber || !phoneColorNumber || !favoriteNumber || !animalPettedNumber || !surveySelectionNumber) {
      document.getElementById("error-message").removeAttribute("class");
    } else {

      if (totalNumber > 24) {
        document.getElementById("python").removeAttribute("class");

      } else if (totalNumber < 12) {
        document.getElementById("ruby").removeAttribute("class");

      } else if (totalNumber >= 12 && totalNumber <= 24) {
        document.getElementById("go").removeAttribute("class");
      }
    }
    form.reset();
  };
};