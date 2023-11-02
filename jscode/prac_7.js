let bgColorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fontSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let borderRadiusElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function apply() {
    let bgColor = bgColorElement.value;
    let fontColor = fontColorElement.value;
    let fontSize = fontSizeElement.value;
    let fontWeight = fontWeightElement.value;
    let paddingval = paddingElement.value;
    let borderRadiusval = borderRadiusElement.value;

    customButtonElement.style.backgroundColor = bgColor;
    customButtonElement.style.color = fontColor;
    customButtonElement.style.fontSize = fontSize;
    customButtonElement.style.fontWeight = fontWeight;
    customButtonElement.style.padding = paddingval;
    customButtonElement.style.borderRadius = borderRadiusval;

}