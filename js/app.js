// Grab html elements
// Get the inputs value on enter key press
// Grab data related related to users search
// Inject movie items into the dom based on users search


let searchInput = document.querySelector('.search');
let itemWrapper = document.querySelector('main');
let searchPara = document.querySelector('.search-p');
var detailedDisplay = document.querySelector('.detailed-display');


function displayMatches(matches) {
  itemWrapper.innerHTML = '';
  searchPara.innerHTML = '';
  searchInput.value = ''
  console.log(matches);

  if (!matches) {
    return searchPara.innerHTML = `<p class="search-p">No matches found</p>`
  }

  for (match of matches) {
    itemWrapper.insertAdjacentHTML("beforeend", `
    <div class="movie-item" style="background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${match.Poster})">
    <h3>${match.Title}</h3>
    <p>Release Year: ${match.Year}</p>
    <a data-id="${match.imdbID}" href="" target="_blank">View More Details</a>
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
     searchInput.innerHTML = '';
    }
    
  }
 

function showMoviedetails(movieId) {
  fetch(`https://www.omdbapi.com/?apikey=2fd1d9f2&i=${movieId}`)
     .then(res => res.json())
     .then(function (data) {
      

      detailedDisplay.innerHTML = `

        <h2>Title: ${data.Title}</h2>
        <h3>Released: ${data.Released}</h3>
        <p><strong>Rated:</strong> ${data.Rated}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Writers:</strong> ${data.Writer}</p> 
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>Language:</strong> ${data.Language}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Awards:</strong> ${data.Awards}</p>
        <a href="https://www.imdb.com/title/${data.imdbID}/" target="_blank">View IMDb Page</a>

      `

      detailedDisplay.classList.remove('hide')
     })
}



function init() {
  searchInput.addEventListener('keydown', getMovieData)
  itemWrapper.addEventListener('click', function(event) {
    event.preventDefault();

    var el = event.target;

    if(el.tagName === 'A') {
      showMoviedetails(el.dataset.id)
    }
  })
  detailedDisplay.addEventListener('click', function (event) {
    detailedDisplay.classList.add('hide');
  });
}

init();

/* <div class="movie-item">
  <h3>Movie Title</h3>
  <p>lorum hwhh  whuhwuuy  ywyuyhuwu yuyuowyuy uywpuy ywyu </p>
  <a href="#">View More Details</a>
</div> */