//слайдер
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow__slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



//EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ 
const API_key = 'EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ';

document.addEventListener("DOMContentLoaded", function (event) {
    let moviesContent = "";
    fetch(`https://api.kinopoisk.dev/collection?token=${API_key}&search=top_items_all&field=collectionId`)
        .then(response => response.json())
        .then(movie => {
            for (let i = 0; i < 10; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.movies[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.movies[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.movies[i].poster.previewUrl}>
                </div>`
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));


    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5`)
        .then(response => response.json())
        .then(movie => {

            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                </div>`
            }
            document.querySelector(".movies__anime").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    //https://api.kinopoisk.dev/movie/?token=EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ&field=top250&search=!null

    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0`)
        .then(response => response.json())
        .then(movie => {

            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                </div>`
            }
            document.querySelector(".movies__fantastika").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/movie/?token=${API_key}&field=top250&search=!null&field=genres.name&search=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0`)
        .then(response => response.json())
        .then(movie => {

            moviesContent = "";
            for (let i = 0; i < 5; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                </div>`
            }
            document.querySelector(".movies__drama").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));
})