// window.addEventListener("DOMContentLoaded",function getMovie(){
//     fetch('https://dummyapi.online/api/movies')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//     getMovie(){

//     }

// })
window.addEventListener("DOMContentLoaded", function () {
    getMovies();
});

function getMovies() {
    fetch('/assets/json/db.json')
        .then((response) => response.json())
        .then((movies) => {
            displayMovies(movies);
        });
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');

    movies.forEach((movie) => {
        const card = document.createElement('div');
        card.classList.add('cardMovie');

        const title = document.createElement('h3');
        title.textContent = movie.title.toUpperCase();
        title.style.color = "red";


        const rating = document.createElement('p');
        rating.textContent = `Rating: ${movie.rating}`;
        rating.style.color = "Black";

        const imdb = document.createElement('p');
        imdb.textContent = `imdb:${movie.imdb}`;
        imdb.style.color = 'black';

        const img = document.createElement('img');
        img.src = movie.photo
        img.style.width = "auto";
        img.style.marginTop = "9px";
        // Add more elements as needed

        card.appendChild(title);
        card.appendChild(rating);
        card.appendChild(imdb);
        card.appendChild(img);
        movieContainer.appendChild(card);
    });
}