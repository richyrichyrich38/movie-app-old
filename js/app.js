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
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${match.image_url})">
    <h3>${match.title}</h3>
    <p>${match.description}</p>
    <a href="${match.imdb_url}" target="_blank">View More Details</a>
    </div>
    `)

    console.log(match);
  }
}``


function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.trim().toLowerCase()

  if (keyCode === 13 && searchText) {
    var matches = [];

    for (movie of movieData) {
      if (movie.title.toLowerCase().includes(searchText)) {
        matches.push(movie)
        
      }


    }
    displayMatches(matches)
  };
  // console.log(keyCode);
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