
function updateClock() {
const now = new Date();

const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();

const secondHand = document.getElementById('second-hand').querySelector('.hand');
const minuteHand = document.getElementById('minute-hand').querySelector('.hand');
const hourHand = document.getElementById('hour-hand').querySelector('.hand');

const secondDeg = (seconds / 60) * 360 + 90;
const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

secondHand.style.transform = `rotate(${secondDeg}deg)`;
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to set the clock hands immediately

