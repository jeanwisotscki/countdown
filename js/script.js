import Countdown from "./modules/countdown.js";
import switchDate from "./modules/switch-date.js";

//const daysLeft = new Countdown("24 December 2022 23:59:59 GMT-0300");
const dateInput = document.querySelector("#date");
const contador = document.querySelector(".contador");

dateInput.addEventListener("change", () => {
  getDate(dateInput.value);
});

function getDate(data) {
  const arrayData = data.replace("-", " ").replace("-", " ").split("T");
  const dias = arrayData[0];
  const horas = arrayData[1];

  const count = new Countdown(switchDate(dias) + " " + horas + ":00 GMT-0300");
  const day = count.total.days;
  const hour = count.total.hours;
  const minute = count.total.minutes;
  const seconds = count.total.seconds;

  //   setInterval(() => {
  //     contador.innerText = `${day} ${hour}:${minute}:${seconds}`;
  //   }, 1000);
}

function trataHoras(horas) {}

// console.log(daysLeft.days);
// console.log(daysLeft.hours);
// console.log(daysLeft.minutes);
// setInterval(() => {
//   contador.innerText = `${daysLeft.total.days}:0${daysLeft.total.hours}:${daysLeft.total.minutes}:${daysLeft.total.seconds}`;
// }, 1000);
