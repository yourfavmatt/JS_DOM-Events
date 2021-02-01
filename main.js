/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerText =
  'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this"
document.getElementsByClassName("node2")[0].innerText =
  'I used the getElementsByClassName("node2") to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these"
const h3Nodes = document.getElementsByTagName("h3");
for (let node of h3Nodes) {
  node.innerText =
    'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a text node using this element.createElement() and put this text inside "I am a p element"
const p = document.createElement("p");
p.innerText = "I am a p element";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(p);
// TODO: Create a 'small' element using this element.createTextNode() and put this text inside "I am small"
const small = document.createElement("small");
small.innerText = "I am small";
// TODO: Insert the created element inside the parent but before the one you just created using the element.insertBefore() method
parent.insertBefore(small, p);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a newly created element with text content: "New Child Node"
const newP = document.createElement("p");
newP.innerText = "New Child Node";
// TODO: Remove the "p"
const exercise3 = document.getElementById("exercise3");
exercise3.replaceChild(newP, document.getElementById("oldNode"));
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which alerts the user this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
