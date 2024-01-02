window.addEventListener("DOMContentLoaded",function getMovie(){
    fetch('https://dummyapi.online/api/movies')
    .then((response) => response.json())
    .then((json) => console.log(json));
})