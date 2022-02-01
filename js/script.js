import Countdown from "./modules/countdown.js";

const daysLeft = new Countdown("24 December 2022 23:59:59 GMT-0300");

console.log(daysLeft.days);
console.log(daysLeft.hours);
console.log(daysLeft.minutes);
// setInterval(() => {
//   console.log(daysLeft.total);
// }, 1000);
