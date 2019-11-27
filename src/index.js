const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const getPerson = () => {
  fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(resp => returnResults(resp))
    .then(persons => {
      for (let person of persons) {
        renderPerson(person);
      }
    });
};

const returnResults = object => {
  return object["results"];
};

const renderPerson = person => {
  console.log(person);
  console.log(
    "Remaining step will be left unfinished: make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags."
  );
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  getPerson();
});
