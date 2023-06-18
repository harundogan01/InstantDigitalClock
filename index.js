const clock = document.querySelector('.clock')
const timer = () => {
    const instant = new Date()
    const hours = instant.getHours()
    const minutes = instant.getMinutes()
    const seconds = instant.getSeconds()

    const html = `<span>${hours} : ${minutes} : ${seconds}</span>`
    clock.innerHTML = html
}

setInterval(timer, 1000)