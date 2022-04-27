
const API_KEY = '30eb640baaf1753792330e166b8ddf4f'

const seattleLatLog = {
    name: 'Seattle',
    class: 'seattle',
    lat: '47.620422',
    log: '-122.349358'
}

const rattleSnakeLedge = {
    name: 'rattle Snake Ledge',
    class: 'rattleSnake',
    lat: '47.4458',
    log: '-121.7950',
}
const wonju = {
    name: 'Wonju',
    class: 'wonju',
    lat: '37.3422',
    log: '127.9202'
}

const addTextToElement = (targetElementClassName, textToAdd) => {
    const text = document.createTextNode(textToAdd)
    const target = document.querySelector(`.${targetElementClassName}`)
    target.appendChild(text);
}

const getWeatherForLocation = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.log}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        addTextToElement(location.class, `Weather: current temp is ${data.main.temp}F and ${data.weather[0].description}`)
    })
    // .then(data => console.log(data))
    .catch(err => console.log('err', err))
}

getWeatherForLocation(seattleLatLog)
getWeatherForLocation(rattleSnakeLedge)
getWeatherForLocation(wonju)