
fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(function (data) {
        const name = data.name
        const height = data.height
        const mass = data.mass
        const hair = data.hair_color
        const eye = data.eye_color
        const gender = data.gender
        const films = data.films
        const starships = data.starships
        const home = data.homeworld

        const nameDiv = document.querySelector(".name")
        nameDiv.innerText = `${name}`

        const traitsDiv = document.querySelector(".traits")
        traitsDiv.innerText = `height: ${height} mass: ${mass} hair: ${hair} eyes: ${eye} gender: ${gender}`
    })

fetch("https://swapi.co/api/films/1/")
    .then(response => response.json())
    .then(function (movie) {
        const title = movie.title
        const film1 = document.querySelector(".film1")
        film1.innerText = `${ title }`
})

fetch("https://swapi.co/api/films/2/")
    .then(response => response.json())
    .then(function (movie) {
        const title = movie.title
        const film2 = document.querySelector(".film2")
        film2.innerText = `${ title }`
})

fetch("https://swapi.co/api/films/3/")
    .then(response => response.json())
    .then(function (movie) {
        const title = movie.title
        const film3 = document.querySelector(".film3")
        film3.innerText = `${ title }`
})

fetch("https://swapi.co/api/films/6/")
    .then(response => response.json())
    .then(function (movie) {
        const title = movie.title
        const film4 = document.querySelector(".film4")
        film4.innerText = `${ title }`
})

const hobbyStuff = []

fetch("https://swapi.co/api/starships/13/")
    .then(response => response.json())
    .then(function (ship) {
        const vehicle = ship.name
        hobbyStuff.push(vehicle)
    })
    .then(fetch("https://swapi.co/api/planets/1/")
    .then(response => response.json())
    .then(function (homeworld) {
        const planet = homeworld.name
        hobbyStuff.push(planet)
})
    .then(function () {
        const hobbyDiv = document.querySelector(".hobby")
        hobbyDiv.innerText = "My favorite hobby is riding my " + hobbyStuff[0] + " around the greatest planet in the galaxy, " + hobbyStuff[1] + "."
    })
)

