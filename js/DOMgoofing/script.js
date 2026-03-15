const container = document.querySelector("#container");

//red text
const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey I'm red!";
content.style.color = "red";
container.appendChild(content);

//blue text
const contentTwo = document.createElement("h3");
contentTwo.classList.add("contentTwo");
contentTwo.textContent = "I'm a blue h3!";
contentTwo.style.color = "blue";
container.appendChild(contentTwo);

//pink div
const contentDiv = document.createElement("div");
contentDiv.classList.add("contentDiv");
contentDiv.style.backgroundColor = "pink";
contentDiv.style.border = "2px solid black"
container.appendChild(contentDiv);

//h1
const divText = document.createElement("h1");
divText.classList.add("divText");
divText.textContent = "I'm in a div";
contentDiv.appendChild(divText);

//p
const divTextTwo = document.createElement("p");
divTextTwo.classList.add("divTextTwo");
divTextTwo.textContent = "ME TOO!";
contentDiv.appendChild(divTextTwo);