"use strict";
const birthdays = document.querySelector(".birthdays");
function createBirthday(name, date) {
    const birthdayParent = document.createElement("div");
    birthdayParent.classList.add("birthday-div");
    const namePara = document.createElement("p");
    namePara.classList.add("name-p");
    namePara.innerText = name;
    const datePara = document.createElement("p");
    datePara.classList.add("date-p");
    namePara.innerText = date;
    birthdayParent.appendChild(namePara);
    birthdayParent.appendChild(datePara);
    birthdays?.appendChild(birthdayParent);
}
console.log(birthdays);
