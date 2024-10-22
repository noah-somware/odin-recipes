const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.classList.add('redP');
redP.textContent = "Hi I'm red.";
redP.style.cssText = 'color: red;';

container.appendChild(redP);

const header3 = document.createElement('h3');
header3.textContent = "I'm a title";
header3.style.color = 'blue';

container.appendChild(header3);

const content2 = document.createElement('div');
content2.classList.add('content');
const header1 = document.createElement('h1');
const p2 = document.createElement('p');
header1.textContent = "I'm in a div";
p2.textContent = 'ME TOO!';

// content2.innerHTML = "<h1>I'm in a div</h1><p>ME TOO!</p>"

content2.style.cssText = 'border-style: solid; border-width: 2px; border-color: black; background-color: pink;';
content2.appendChild(header1);
content2.appendChild(p2);
container.appendChild(content2);

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert('Hello World');

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => {
    alert('Hello World');
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    console.log(e.target);
});

const mozLink = document.querySelector("#mozLink");
mozLink.textContent = "Mozilla Developer Network";
mozLink.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );
  
const linkPara = document.querySelector("#linkPara");
linkPara.appendChild(text);

