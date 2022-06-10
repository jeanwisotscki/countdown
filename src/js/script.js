import Countdown from "./modules/countdown.js";

const regexpDateInput = /(\d{4})-(\d{2})-(\d{2}\w{1})(\d{2}:\d{2})/g;
const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const dateInput = document.querySelector("#date");
const btnStart = document.querySelector(".start");
let intervalo = null;
let userInputDate;

// usa a data do localStorage, caso já exista
window.onload = () => {
  clearCountdown();
  const local = localStorage.getItem("userInputDate");

  if (local) {
    userInputDate = new Date(local);
    const count = new Countdown(userInputDate);

    updateCountdown(count);
  }
};

// inicia o countdown (somente com o clique no botão)
function initCountdown(e) {
  e.preventDefault();
  clearCountdown();

  // verifica se o input está vazio, senão executa os comandos
  if (dateInput.value != "") {
    const dataRegex = dateInput.value.match(regexpDateInput);
    dateInput.value = dataRegex[0];

    userInputDate = new Date(dateInput.value);
    const count = new Countdown(userInputDate);

    updateLocalStorage(dateInput.value);
    updateCountdown(count);
  } else {
    alert("Por favor, escolha uma data!");
  }
}

// adiciona a data ao localStorage
function updateLocalStorage(userDate) {
  localStorage.setItem("userInputDate", userDate);
}

// atualiza os números do countdown
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

// para o intervalo e zera os números do countdown
function clearCountdown() {
  clearInterval(intervalo);
  dias.innerText = "00";
  horas.innerText = "00";
  minutos.innerText = "00";
  segundos.innerText = "00";
}

btnStart.addEventListener("click", initCountdown);
