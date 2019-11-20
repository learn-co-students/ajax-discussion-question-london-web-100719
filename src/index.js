const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// identify person attributes
const pic = document.querySelector("#profile_picture");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const street = document.querySelector("#street");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postcode = document.querySelector("#postcode");
const phone = document.querySelector("#phone");
const cell = document.querySelector("#cell");
const dob = document.querySelector("#date_of_birth");

// identify button to press
const btn = document.querySelector("button");

// fetch json and render data
function fetchData() {
  return fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      data.results.forEach(function(person) {
        renderData(person);
      })
    })
}

// data to render
function renderData(person) {
  pic.src = person.picture.thumbnail;
  fullName.innerText = `${person.name.first} ${person.name.last}`;
  email.innerText = person.email;
  street.innerText = `${person.location.street.number}, ${person.location.street.name}`;
  city.innerText = person.location.city;
  state.innerText = person.location.state;
  postcode.innerText = person.location.postcode;
  phone.innerText = person.phone;
  cell.innerText = person.cell;
  dob.innerText = person.dob.date;
}

// execute fetch when button is clicked
btn.addEventListener("click", function() {
  fetchData();
});