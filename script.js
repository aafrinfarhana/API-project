const api = "http://www.omdbapi.com/?apikey=35e3a566&t=";
const result = document.getElementById("result");

// Search movie
function searchMovie(){
  let name = movieName.value.trim();
  if(name===""){
    result.innerHTML="Enter movie name";
    return;
  }

  fetch(api+name)
  .then(res=>res.json())
  .then(data=>{
    result.innerHTML=`
      <div class="card">
        <img src="${data.Poster}">
        <h3>${data.Title}</h3>
        <p>⭐ ${data.imdbRating}</p>
      </div>
    `;
  });
}

// Popular movies
let movies = [
  "Avatar",
  "Joker",
  "Titanic",
  "Inception",
  "Interstellar",
  "Avengers",
  "Spider Man",
  "Iron Man",
  "Batman",
  "Frozen",
  "Harry Potter",
  "Bahubali",
  "The nun",
  "RRR",
  "Pushpa",
  "Leo",
  "Vikram",
  "Master",
  "Jailer",
  "Conjuring",
  "Doctor strange",
  "salar",
  "Stranger things",
  "Squid game"
  
];

movies.forEach(m=>{
  fetch(api+m)
  .then(res=>res.json())
  .then(d=>{
    moviesList.innerHTML+=`
      <div class="card" onclick="book('${d.Title}')">
        <img src="${d.Poster}">
        <p>${d.Title}</p>
      </div>
    `;
  });
});

// Booking
function book(title){
  booking.style.display="block";
  bookTitle.innerText=title;
}

function closeBox(){
  booking.style.display="none";
}

function confirm(){
  alert("Ticket Booked ✅");
  closeBox();
}