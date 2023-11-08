let moviesReviewContainer = document.getElementById("movieReviewsContainer");
let movieTitleEl = document.getElementById("titleInput");
let reviewEl = document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");

let reviewsContainer = document.createElement("div");
reviewsContainer.id = "reviewsContainer";
let reviewsContainerId = reviewsContainer.id;
moviesReviewContainer.appendChild(reviewsContainer);

function onAdd() {
    let MovieTitleElVal = movieTitleEl.value;
    let reviewElVal = reviewEl.value;
    if (MovieTitleElVal === "") {
        alert("enter the movie title");
        return;
        
    } else {
        let titlestuff = "Movie Title : " + MovieTitleElVal;
        let para = document.createElement("p");
        para.id = "para";
        para.textContent = titlestuff;
        para.classList.add("movie-title");

        let reviewStuff = "Review : " + reviewElVal;
        let para2 = document.createElement("p");
        para2.id = "para2";
        para2.textContent = reviewStuff;
        para2.classList.add("title-stuff");

        reviewsContainer.appendChild(para);
        reviewsContainer.appendChild(para2);
    }
    movieTitleEl.value = "";
    reviewEl.value = "";
}


addBtn.onclick = function() {
    onAdd();
}
console.log(moviesReviewContainer);