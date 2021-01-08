/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
let node1 = document.getElementById("node1");
let node2 = document.getElementsByClassName("node2")[0];
let h3_list = document.getElementsByTagName("h3");

node1.innerHTML = "I used the getElementById('node1') method to access this";
node2.innerHTML = "I used the getElementByClassName('node2') method to access this";

for (let i = 0; i < h3_list.length; i++) {
    h3_list[i].innerHTML = "I used the getElementByTagName('h3') method to access all the h3 tags";
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
let p = document.getElementById("parent"); //parent node

let para1 = document.createElement("p");
para1.innerHTML = "Child Node #1 - This node was created using the createElement() method";
p.appendChild(para1);

let myNode = document.createTextNode("Child Node #2 - This node was created using the createTextNode() method");
p.insertBefore(myNode, para1);


/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
let parent = document.getElementById("exercise3");
let n1 = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
newChild.style.textAlign = "center";
n1 = parent.replaceChild(newChild, n1);
// parent.replaceChild(n1, temp);

let node = document.getElementById("exercise3");
if (node.parentNode) {
    node.parentNode.removeChild(node);
}


/*----------- Exercise #4: ANIMATIONS ----------- */
let pos = 0;
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move() {
    if (pos >= 150) {
        clearInterval(t);
    } else {
        pos += 1;
        box.style.left = pos + "px";
    }
}

/*----------- Exercise #5: DOM EVENTS --------------*/
function show() {
    alert("Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user");
}

let btn = document.getElementById("")