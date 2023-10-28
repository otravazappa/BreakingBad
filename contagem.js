function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const endDate = new Date('2025-12-31T23:59:59'); 
    const now = new Date();

    const timeDifference = endDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    daysElement.textContent = padZeroes(days);
    hoursElement.textContent = padZeroes(hours);
    minutesElement.textContent = padZeroes(minutes);
    secondsElement.textContent = padZeroes(seconds);
}
function padZeroes(value) {
    return value.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);