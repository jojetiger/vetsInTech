
const API_KEY = '30eb640baaf1753792330e166b8ddf4f'

const edward = {
    class: 'edward',
    lat: '47.732428',
    log: '-122.251423'
}

const fragnance = {
    class: 'fragnance',
    lat: '48.6534047',
    log: '-122.4903177',
}
const poopoo = {
    class: 'poopoo',
    lat: '47.4999707',
    log: '-122.0241684'
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

getWeatherForLocation(edward)
getWeatherForLocation(fragnance)
getWeatherForLocation(poopoo)


