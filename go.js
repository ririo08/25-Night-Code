window.onload = function () {
    let time = new Date()
    let fullTime = 3600 * time.getHours() + 60 * time.getMinutes() + time.getSeconds() +2
    let idData = ""
    let timeData = fullTime
    if (1 <= fullTime && fullTime <= 3599) {
        console.log("#3")
        timeData += 25200
        idData = "iirpWIYpSKw"
    }
    if (3600 <= fullTime && fullTime <= 32399) {
        console.log("#1")
        timeData -= 3600
        idData = "JgSV96MQC6Q"
    }
    if (32400 <= fullTime && fullTime <= 61199) {
        console.log("#2")
        timeData -= 32400
        idData = "3r8xtntA3ZU"
    }
    if (61200 <= fullTime && fullTime <= 86399) {
        console.log("#3")
        timeData -= 61200
        idData = "iirpWIYpSKw"
    }
    let urlData = `https://youtu.be/${idData}?t=${timeData}`;
    window.location.href = urlData
}