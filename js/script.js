import Countdown from "./modules/countdown.js";

const userAccessDate = new Date();
localStorage.setItem("clientAccessDate", userAccessDate);

/*
  if local storage clientInputDate
  countdown recebe clientInputDate
*/

const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const dateInput = document.querySelector("#date");
const btnStart = document.querySelector(".start");
let intervalo = null;

const regexpDateInput = /(\d{4})-(\d{2})-(\d{2}\w{1})(\d{2}:\d{2})/g;

btnStart.addEventListener("click", initCountdown);

function initCountdown(e) {
  e.preventDefault();

  if (btnStart.classList.contains("active")) {
    clearCountdown();
    btnStart.classList.remove("active");
  }
  btnStart.classList.add("active");

  if (dateInput.value != "") {
    const dataRegex = dateInput.value.match(regexpDateInput);
    dateInput.value = dataRegex[0];

    const userInputDate = new Date(dateInput.value);
    const count = new Countdown(userInputDate);

    localStorage.setItem("clientInputDate", dateInput.value);

    updateCountdown(count);
  } else {
    alert("Por favor, escolha uma data!");
  }
}

function updateCountdown(count) {
  intervalo = setInterval(() => {
    dias.innerText =
      count.total.days < 10 ? "0" + count.total.days : count.total.days;
    horas.innerText =
      count.total.hours < 10 ? "0" + count.total.hours : count.total.hours;
    minutos.innerText =
      count.total.minutes < 10
        ? "0" + count.total.minutes
        : count.total.minutes;
    segundos.innerText =
      count.total.seconds < 10
        ? "0" + count.total.seconds
        : count.total.seconds;

    if (
      count.total.days <= 0 &&
      count.total.hours <= 0 &&
      count.total.minutes <= 0 &&
      count.total.seconds <= 0
    ) {
      clearCountdown();
      setTimeout(() => {
        alert("Countdown finalizada!");
      });
    }
  }, 1000);
}

function clearCountdown() {
  clearInterval(intervalo);
  dias.innerText = "00";
  horas.innerText = "00";
  minutos.innerText = "00";
  segundos.innerText = "00";
}
