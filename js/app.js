// Grab html elements
// Get the inputs value on enter key press
// Grab data related related to users search
// Inject movie items into the dom based on users search


let searchInput = document.querySelector('.search');
let itemWrapper = document.querySelector('main');
let searchPara = document.querySelector('.search-p');

function displayMatches(matches) {
  itemWrapper.innerHTML = '';
  searchPara.innerHTML = '';

  for (match of matches) {
    itemWrapper.insertAdjacentHTML("beforeend", `
    <div class="movie-item" style="background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${match.Poster})">
    <h3>${match.Title}</h3>
    <p>Release Year: ${match.Year}</p>
    <a href="https://www.imdb.com/title/${match.imdbID}/" target="_blank">View More Details</a>
    </div>
    `)

    console.log(match);
  }
}


function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.trim().toLowerCase()

  if (keyCode === 13 && searchText) {

    // FETCH REQUEST V3 - MODERN JS
    fetch(`https://www.omdbapi.com/?apikey=2fd1d9f2&s=${searchText}`)
     .then(res => res.json())
     .then(data => displayMatches(data.Search))
    }
    
  }
 





function init() {
  searchInput.addEventListener('keydown', getMovieData)

}

init();

/* <div class="movie-item">
  <h3>Movie Title</h3>
  <p>lorum hwhh  whuhwuuy  ywyuyhuwu yuyuowyuy uywpuy ywyu </p>
  <a href="#">View More Details</a>
</div> */