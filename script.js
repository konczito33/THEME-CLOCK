const hoursNeedle = document.querySelector('.hour')
const minutesNeedle = document.querySelector('.minute')
const secondsNeedle = document.querySelector('.second')
const toggle = document.querySelector('.toggle')

function clockNeedles() {
    const date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    hoursNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 23, 0, 360 )}deg)`
    minutesNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360 )}deg)`
    secondsNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360 )}deg)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

clockNeedles()

setInterval(clockNeedles, 1000)

toggle.addEventListener('input', () => {
    if (toggle.checked) {
        document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
    }
})

function date() {
    const date = new Date
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    const hourDate = document.querySelector('.hourDate')
    hourDate.textContent = `${hours}:${minutes}`
    const dayDate = document.querySelector('.dayDate')
    dayDate.textContent = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}

date()
setInterval(date, 1000)