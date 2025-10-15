//********************Chapter 58-67********************//

//---------------------Q1

document.write("<h2>Q1: DOM Manipulation</h2>");

// i. Get element of id "main-content" and assign them in a variable.
let mainContent = document.getElementById("main-content");

// ii. Display all child elements of "main-content" element.
document.write("<h3>ii. Child elements of 'main-content':</h3>");
let children = mainContent.children;
for (let i = 0; i < children.length; i++) {
  document.write(children[i].outerHTML + "<br>");
}

// iii. Get all elements of class "render" and show their innerHTML.
document.write("<h3>iii. InnerHTML of elements with class 'render':</h3>");
let renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
  document.write(renderElements[i].innerHTML + "<br>");
}

// iv. Fill input value whose element id is "first-name".
document.getElementById("first-name").value = "Alex";

// v. Repeat part iv for id "last-name" and "email".
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//---------------------Q2

document.write("<h2>Q2: DOM Properties</h2>");

// i. What is node type of element having id "form-content".
let formContent = document.getElementById("form-content");
document.write("<h3>i. Node type of 'form-content':</h3>");
document.write(`Node Type: ${formContent.nodeType} (Element Node) <br>`); // Note: 1 indicates an Element node

// ii. Show node type of element having id "lastName" and its child node.
let lastNameEl = document.getElementById("lastName");
document.write("<h3>ii. Node type of 'lastName' and its child:</h3>");
document.write(`'lastName' Node Type: ${lastNameEl.nodeType} (Element Node) <br>`);
document.write(`'lastName' Child Node Type: ${lastNameEl.childNodes[0].nodeType} (Text Node) <br>`); // Note: 3 indicates a Text node

// iii. Update child node of element having id "lastName".
lastNameEl.childNodes[0].nodeValue = "Last Name: Smith";
document.write("<h3>iii. Updated 'lastName' text:</h3>");
document.write(`New Content: ${lastNameEl.innerHTML} <br>`);


// iv. Get First and last child of id "main-content".
document.write("<h3>iv. First and Last child of 'main-content':</h3>");
document.write(`First Child: ${mainContent.firstElementChild.innerHTML} <br>`);
document.write(`Last Child: ${mainContent.lastElementChild.innerHTML} <br>`);


// v. Get next and previous siblings of id "lastName".
document.write("<h3>v. Siblings of 'lastName':</h3>");
document.write(`Previous Sibling: ${lastNameEl.previousElementSibling.innerHTML} <br>`);
document.write(`Next Sibling: ${lastNameEl.nextElementSibling.innerHTML} <br>`);


// vi. Get parent node and node type of element having id "email".
let emailInput = document.getElementById("email");
document.write("<h3>vi. Parent and Node Type of 'email' input:</h3>");
document.write(`Parent Node ID: ${emailInput.parentNode.id} <br>`);
document.write(`Node Type: ${emailInput.nodeType} (Element Node) <br>`);