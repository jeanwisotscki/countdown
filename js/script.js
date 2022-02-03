import Countdown from "./modules/countdown.js";

const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const dateInput = document.querySelector("#date");
const btnStart = document.querySelector(".start");

btnStart.addEventListener("click", initCountdown);

function initCountdown(e) {
  e.preventDefault();
  if (dateInput.value != "") {
    const userDate = new Date(dateInput.value);
    const count = new Countdown(userDate);
    updateCountdown(count);

    btnStart.addEventListener("click", () => {
      clearCountdown();
    });
  } else {
    alert("Pro favor, escolha uma data!");
  }
}

function updateCountdown(count) {
  const loop = setInterval(() => {
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
  }, 1000);
}

function clearCountdown() {
  dias.innerText = "00";
  horas.innerText = "00";
  minutos.innerText = "00";
  segundos.innerText = "00";
}
