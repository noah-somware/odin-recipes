const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redP = document.createElement("p");
redP.classList.add("redP");
redP.textContent = "Hi I'm red."
redP.style.cssText = "color: red;";

container.appendChild(redP);

const header3 = document.createElement("h3");
header3.textContent = "I'm a title";
header3.style.color = "blue";

container.appendChild(header3);

const content2 = document.createElement("div");
content2.innerHTML = "<h1>I'm in a div</h1><p>ME TOO!</p>"