let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitElement = document.getElementById("timeToVisitTab");
let attractionsElement = document.getElementById("attractionsTab");

let abtButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");

timeToVisitElement.classList.add("d-none");
attractionsElement.classList.add("d-none");

function about() {
    aboutTabElement.classList.remove("d-none");
    timeToVisitElement.classList.add("d-none");
    attractionsElement.classList.add("d-none");

    abtButtonElement.classList.add("selected-one");
    timeToVisitButtonElement.classList.remove("selected-one");
    attractionsButtonElement.classList.remove("selected-one");
}

function timetoVisit() {
    aboutTabElement.classList.add("d-none");
    timeToVisitElement.classList.remove("d-none");
    attractionsElement.classList.add("d-none");

    abtButtonElement.classList.remove("selected-one");
    timeToVisitButtonElement.classList.add("selected-one");
    attractionsButtonElement.classList.remove("selected-one");
}

function attractions() {
    aboutTabElement.classList.add("d-none");
    timeToVisitElement.classList.add("d-none");
    attractionsElement.classList.remove("d-none");

    abtButtonElement.classList.remove("selected-one");
    timeToVisitButtonElement.classList.remove("selected-one");
    attractionsButtonElement.classList.add("selected-one");

}