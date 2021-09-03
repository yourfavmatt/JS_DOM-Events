console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent =
  'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
console.log(document.getElementsByClassName("node2"));
document.getElementsByClassName("node2")[0].textContent =
  'I used the getElementByClassName("node2") method to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
for (const ele of document.getElementsByTagName("h3")) {
  ele.textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
let newP1 = document.createElement("p");
newP1.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent1 = document.querySelector("#parent");
parent1.appendChild(newP1);
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
let anchor1 = document.createElement("a");
anchor1.textContent = "Google Search";
// BONUS: Add a link href to the <a>
anchor1.href = "https://google.com";
anchor1.target = "_blank";
let externalLinkIcon = document.createElement("img");
externalLinkIcon.src = "./assets/external-link.svg";
externalLinkIcon.style.width = "25px";
externalLinkIcon.style.color = "blue";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent1.insertBefore(anchor1, newP1);
anchor1.appendChild(externalLinkIcon);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const parent2 = document.getElementById("exercise3");
const oldChild = document.getElementById("N1");
const newChild = document.createElement("p");
newChild.textContent = "New Child Node";
parent2.replaceChild(newChild, oldChild);
// TODO: Remove the "New Child Node"
setTimeout(() => {
  parent2.removeChild(newChild);
}, 3000);

/*----------- Exercise #4: ANIMATIONS ----------- */

let posX = 0;
let posY = 0;
let dir = "right";

let box = document.querySelector("#box");
let container = document.querySelector("#container");
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);

function move() {
  console.log(posX, posY);

  switch (dir) {
    case "right":
      posX += 10;
      if (posX > container.clientWidth - box.clientWidth) {
        dir = "down";
      } else {
        box.style.left = posX + "px";
      }
      break;
    case "down":
      posY += 10;
      if (posY > container.clientHeight - box.clientHeight) {
        dir = "left";
      } else {
        box.style.top = posY + "px";
      }
      break;
    case "left":
      posX -= 10;
      if (posX < 0) {
        dir = "up";
      } else {
        box.style.left = posX + "px";
      }
      break;
    case "up":
      posY -= 10;
      if (posY < 0) {
        dir = "right";
      } else {
        box.style.top = posY + "px";
      }
      break;
    default:
      clearInterval(interval);
  }
}

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
const modalBtn = document.querySelector("#btn");
modalBtn.addEventListener("click", show);

function show() {
  let modal = document.createElement("div");
  modal.id = "modal";
  let modalCard = document.createElement("div");
  modalCard.classList.add("modal-card");
  let title = document.createElement("h3");
  title.textContent = "Modal Title";
  let para = document.createElement("p");
  para.textContent = "Modal Text";
  let btn = document.createElement("button");
  btn.textContent = "Close";
  btn.addEventListener("click", close);
  modalCard.append(title, para, btn);
  modal.append(modalCard);
  document.body.appendChild(modal);

  modal.addEventListener("click", close);
  window.addEventListener("keyup", close);

  function close(event) {
    console.log(event);
    if (event.type == "keyup" && event.key == "Escape") {
      document.body.removeChild(modal);
      window.removeEventListener("keyup", close);
      event.stopPropagation();
    } else if (event.target == btn || event.target.id == "modal") {
      document.body.removeChild(modal);
      event.stopPropagation();
    }
  }
}
