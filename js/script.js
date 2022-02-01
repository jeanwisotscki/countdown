import Countdown from "./modules/countdown.js";
import switchDate from "./modules/switch-date.js";

const dateInput = document.querySelector("#date");
const btnStart = document.querySelector(".start");
const contador = document.querySelector(".contador");

btnStart.addEventListener("click", () => {
  if (dateInput.value != "") {
    getDate(dateInput.value);
  } else {
    alert("Escolha uma data antes de iniciar!");
  }
});

function getDate(data) {
  const arrayData = data.replace("-", " ").replace("-", " ").split("T");
  const dias = arrayData[0];
  const horas = arrayData[1];

  transformDate(dias, horas);
}

function transformDate(dias, horas) {
  const count = new Countdown(switchDate(dias) + " " + horas + ":00 GMT-0300");

  const days = count.total.days;
  const hours = count.total.hours;
  const minutes = count.total.minutes;
  const seconds = count.total.seconds;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

// console.log(daysLeft.days);
// console.log(daysLeft.hours);
// console.log(daysLeft.minutes);
// setInterval(() => {
//   contador.innerText = `${daysLeft.total.days}:0${daysLeft.total.hours}:${daysLeft.total.minutes}:${daysLeft.total.seconds}`;
// }, 1000);

//   setInterval(() => {
//     contador.innerText = `${day} ${hour}:${minute}:${seconds}`;
//   }, 1000);

//const daysLeft = new Countdown("24 December 2022 23:59:59 GMT-0300");
