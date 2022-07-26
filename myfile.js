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

// Calculation:
const splitting = () => {
  let total = parseInt(document.querySelector("#total").value);
  let people = parseInt(document.querySelector("#people").value);
  let tipPercent = document.querySelector("#tipPercent");

  if (tipPercent.value !== "") {
    let calcPercent = parseInt(tipPercent.value);
    const totalWithTip = total + (calcPercent * total) / 100;
    document.querySelector("#perPerson").innerHTML = (
      totalWithTip / people
    ).toFixed(2);
  } else {
    const result = total / people;
    document.querySelector("#perPerson").innerHTML = result.toFixed(2);
  }
};
const splitBtn = document.querySelector("#splitBtn");
splitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  splitting();
});
document.querySelector("#resetBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#perPerson").innerHTML = "$0";
});
