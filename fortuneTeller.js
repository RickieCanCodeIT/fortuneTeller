function getDetails() {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let age = document.querySelector("#age").value;
  let birthMonth = document.querySelector("#birthMonth").value;
  let favoriteColor = document.querySelector("#favorite-color").value;
  let siblingCount = document.querySelector("#siblingCount").value;
}

const fortuneText = document.querySelector(".fortune");

let button = document.querySelector("#getFortune");
button.addEventListener("click", updateFortune);

function updateFortune() {
  getDetails();
  if (firstName === "") {
    alert("Your first name field is empty");
  } else {
    if (firstName === "Jordan") {
      fortuneText.innerText = getFortune();
    } else {
      fortuneText.innerText = "Your day will be fine.";
    }
  }
}

function getFortune() {
  return "Your day will be hectic";
}
