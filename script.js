function searchMovie() {
  let movie = document.getElementById("movieName").value;
  let result = document.getElementById("result");
  movie=movie.trim();
  if (movie === "") {
    result.innerHTML = "<p class='error'>Enter movie name</p>";
    return;
  }

  fetch("http://www.omdbapi.com/?t=" + movie + "&apikey=35e3a566")
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        result.innerHTML = "<p class='error'>Movie not found</p>";
      } else {
        result.innerHTML = `
          <div class="movie-box">
            <img src="${data.Poster}">
            <h2>${data.Title}</h2>
            <p><b>Year:</b> ${data.Year}</p>
            <p><b>Genre:</b> ${data.Genre}</p>
              <p><b>IMDB:</b> ⭐ ${data.imdbRating}</p>
            <p><b>Plot:</b> ${data.Plot}</p>
          </div>
        `;
      }
    });
}