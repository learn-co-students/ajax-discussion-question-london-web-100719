// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const personURL = "https://randomuser.me/api/";
  // let container = document.querySelector('.container')
  let image = document.querySelector('#profile_picture')
  let fullname = document.querySelector('#fullname') //need to split into first and last name
  let email = document.querySelector('#email');
  let street = document.querySelector('#street');
  let city = document.querySelector('#city');
  let state = document.querySelector('#state');
  let postcode = document.querySelector('#postcode');
  let phone = document.querySelector('#phone');
  let cell = document.querySelector('#cell');
  let dob = document.querySelector('#date_of_birth')
  const button = document.querySelector('button')

  function init(){
    fetchPerson();
  }

  function fetchPerson(){
    return fetch(personURL)
    .then( resp => resp.json())
    .then(function(data){
      console.log(data);
      data.results.forEach(function(person){
        renderPerson(person)
      })
    })
  }

  function renderPerson(person){
    console.log(person.results)

    image.src = person.picture.large;
    fullname.innerText = `${person.name.first} ${person.name.last}`
    email.innerText = person.email;
    street.innerText = `${person.location.street.number}, ${person.location.street.name}`;
    city.innerText = person.location.city;
    state.innerText = person.location.state;
    postcode.innerText = person.location.postcode;
    phone.innerText = person.phone;
    cell.innerText = person.cell;
    dob.innerText = person.dob.date;
  }

  button.addEventListener('click', function(){
    fetchPerson();
  }) 

  init();
});
