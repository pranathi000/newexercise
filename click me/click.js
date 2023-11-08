let clickMe = document.getElementById("incrementBtn");
let counterElement = document.getElementById("counterValue");
let clikCount = localStorage.getItem("clickCount");

if (clikCount === null) {
    counterElement.textContent = 0;
} else {
    counterElement.textContent = clikCount;
}

function incrementCount() {
    let atCounterVal = counterElement.textContent;
    let updatedCounterValue = parseInt(atCounterVal) + 1;

    localStorage.setItem("clickCount", updatedCounterValue);
    counterElement.textContent = updatedCounterValue;
}
clickMe.onclick = function() {
    incrementCount();
}   