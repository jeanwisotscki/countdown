import Countdown from "./modules/countdown.js";

const daysLeft = new Countdown("24 December 2022 23:59:59 GMT-0300");
const date = document.querySelector("#date");
date.addEventListener("change", () => {
  //getDate(date.value);
  console.log(date.value.replace("-", " ").replace("-", " ").split("T"));
});

function getDate(data) {
  const arrayData = data.replace("-", " ").replace("-", " ").split("T");

  switch (arrayData[1]) {
    case "01":
      arrayData[1] = "January";
      break;

    case "02":
      arrayData[1] = "February";
      break;

    case "03":
      arrayData[1] = "March";
      break;

    case "04":
      arrayData[1] = "April";
      break;

    case "05":
      arrayData[1] = "May";
      break;

    case "06":
      arrayData[1] = "June";
      break;

    case "07":
      arrayData[1] = "July";
      break;

    case "08":
      arrayData[1] = "August";
      break;

    case "09":
      arrayData[1] = "September";
      break;

    case "10":
      arrayData[1] = "October";
      break;

    case "11":
      arrayData[1] = "November";
      break;

    case "12":
      arrayData[1] = "December";
      break;
  }

  const dataTratada = arrayData[2] + " " + arrayData[1] + " " + arrayData[0];
  console.log(dataTratada);
}

// console.log(daysLeft.days);
// console.log(daysLeft.hours);
// console.log(daysLeft.minutes);
// setInterval(() => {
//   console.log(daysLeft.total);
// }, 1000);
