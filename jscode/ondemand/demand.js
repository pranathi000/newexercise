document.getElementById("me").style.color = "purple";


let container1 = document.createElement('div');
container1.classList.add("bg-container");
document.body.appendChild(container1);
let heading1 = document.createElement('h1');
heading1.classList.add("heading");
heading1.textContent = "Grocery List";
container1.appendChild(heading1);
let unordered = document.createElement('ul');
unordered.classList.add("list-container");
container1.appendChild(unordered);
let food = [
    {
        text: "choco"
    },
    {
        text: "marley"
    },
    {
        text: "capechino"
    },
    {
        text: "milkshake"
    }
];
function foodItem(foo){
    let list = document.createElement('li');
    list.textContent = foo.text;
    unordered.appendChild(list);
    
}
let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id = "deliveryMode";
container1.appendChild(inputEle);

let labelEle = document.createElement('label');
labelEle.setAttribute("for","deliveryMode");
labelEle.classList.add("delivery-text");
labelEle.textContent = "Need Home Delivery";
container1.appendChild(labelEle);

let brEl = document.createElement("br");
container1.appendChild(brEl);

let buttonEle = document.createElement('button');
buttonEle.classList.add("btn","btn-primary");
buttonEle.textContent = "Proceed to pay";
container1.appendChild(buttonEle);

for(let each_item of food){
    foodItem(each_item);
}
