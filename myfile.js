// Time
function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
   if (min < 10) {
     min = `0${min}`;
   }

  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minute").innerHTML = min;
}

// Date
function displayDate() {
  let now = new Date();
  let day = now.getDate();
  let year = now.getFullYear();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[now.getMonth()];

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
}

setInterval(displayTime, 100);
setInterval(displayDate, 100);

// Calculation portion:
// Add selectors to HTML to be able to target them in JS file
// Use queryselectors to select the input fields for total, tip, and people
/* Use if/else conditional statement to say "if input is not empty take the 
field input and save as constant" And add .Fixed(2) to only have 2 ending 
decimal places */
// Use eventlisteners and .preventdefault for calculate and reset buttons

const billDivideForm = document.getElementById("bill-divider-form");
const resetBtn = document.getElementById("reset-btn");

const billSmallText = document.createElement("small");
const tipSmallText = document.createElement("small");
const peopleSmallText = document.createElement("small");

billDivideForm.addEventListener("submit", billDividerHandler);

function billDivideHandler(event) {
  event.preventDefault();
  const inputs = getInputs();
  showCalculatedOutput(inputs);
}

// get all the inputs for the bill divider
function getInputs() {
  let subtotal = document.getElementById("subtotal").value;
  let tipPercent = document.getElementById("tip").value;
  let noOfPerson = document.getElementById("no-of-person").value;
  return { subtotal, tipPercent, noOfPerson };
}

// calculate the bill divider info
function showCalculatedOutput(input) {
  billDivideForm.reset();

  let totalTip =
    (parseFloat(input.subtotal) * parseFloat(input.tipPercent)) / 100;
  let totalAmount = parseFloat(input.subtotal) + totalTip;
  let tipPerPerson = totalTip / parseFloat(input.noOfPerson);
  let billPerPerson = totalAmount / parseFloat(input.noOfPerson);
  // consle.log(totalTip, totalAmount, tipPerPerson, billPerPerson);

  document.getElementById("total-bill").innerHTML = `$ ${totalAmount.toFixed(
    2
  )}`;
  document.getElementById(
    "bill-per-person"
  ).innerHTML = `$ ${billPerPerson.toFixed(2)}`;
  document.getElementById("total-tip").innerHTML = `$ ${totalTip.toFixed(2)}`;
  document.getElementById(
    "tip-per-person"
  ).innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
}

// reset button
/*
resetBtn.addEventListener("click", () => {
  bill.classList.remove("error-border");
  tip.classList.remove("error-border");
  people.classList.remove("error-border");
  billSmallText.remove();
  tipSmallText.remove();
  peopleSmallText.remove();
  resultSection.remove();
  calculateBtn.disabled = true;
  calculateBtn.classList.add("disable");
});
*/

// reset buttin
function fun() {
  document.getElementById("subtotal").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("no-of-person").value = "";
}
