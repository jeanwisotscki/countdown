import Countdown from "./modules/countdown.js";

const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const dateInput = document.querySelector("#date");
const btnStart = document.querySelector(".start");
let intervalo = null;

btnStart.addEventListener("click", initCountdown);

function initCountdown(e) {
  e.preventDefault();
  if (btnStart.classList.contains("active")) {
    clearCountdown();
    btnStart.classList.remove("active");
  }
  btnStart.classList.add("active");
  if (dateInput.value != "") {
    console.log(dateInput.value);
    const userDate = new Date(dateInput.value);
    const count = new Countdown(userDate);
    updateCountdown(count);
  } else {
    alert("Por favor, escolha uma data válida!");
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
