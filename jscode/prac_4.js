let puppyimage = document.getElementById("puppyImage");
let iconColor = document.getElementById("likeIcon");
let likeColor = document.getElementById("likeButton");
let isImageLiked = false;


function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyimage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        iconColor.style.color = "#0967d2";
        likeColor.style.backgroundColor = "#0967d2";
        likeColor.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyimage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        iconColor.style.color = "#cbd2d9";
        likeColor.style.backgroundColor = "#cbd2d9";
        likeColor.style.color = "#9aa5b1";
        isImageLiked = false;

    }

}
