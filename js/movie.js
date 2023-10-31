//слайдер
let slideIndex = 1;
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow__slides");
    let dots = document.getElementsByClassName("slideshow__dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active2";
}
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//API с фильмами
const API_key = '52NBSFR-B5S4KGW-JC6Y5XY-9KE3TWR';

//Ссылка на payment.html в JSON'е, по-другому добавление через js не работает 
var payRedirectLink = `[{
    "link": "../htmls/payment.html"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let moviesContent = "";
    let payHref = JSON.parse(payRedirectLink); //payment.html link

    fetch(`https://api.kinopoisk.dev/v1.3/movie?token=${API_key}&top250=!null&limit=10`)
        .then(response => response.json())
        .then(movie => {moviesContent = "";
           for (let i = 0; i < 10; i++) { 
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/v1.3/movie?token=${API_key}&page=1&limit=10&genres.name=аниме`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 10; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__anime").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/v1.3/movie?token=${API_key}&page=1&limit=10&genres.name=фантастика`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 10; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__fantastika").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));

    fetch(`https://api.kinopoisk.dev/v1.3/movie?token=${API_key}&page=3&limit=10&genres.name=драма`)
        .then(response => response.json())
        .then(movie => {
            moviesContent = "";
            for (let i = 0; i < 10; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__year">Год: ${movie.docs[i].year}</p>
                    <p class="movie__rating">Рейтинг: ${(movie.docs[i].rating.kp).toFixed(1)}</p>
                    <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${movie.docs[i].name}, ${movie.docs[i].year}</p>
                            <img class = "movie__img" src = ${movie.docs[i].poster.previewUrl}>
                            <p class="movie__description">${movie.docs[i].description}</p>
                            <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__drama").innerHTML = moviesContent;
        })
        .catch(error => console.log(error));
})

//Модальное окно
const movieContainer = document.querySelector('.movies');
movieContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('movie__img')) {
        const parentDiv = event.target.parentNode;
        //console.log(parentDiv)
        let movie2 = parentDiv.querySelector(".movie2");
        movie2.style.display = "block";
        window.onclick = function (event) {
            if (event.target == movie2) {
                movie2.style.display = "none";
            }
        }
    }
})
