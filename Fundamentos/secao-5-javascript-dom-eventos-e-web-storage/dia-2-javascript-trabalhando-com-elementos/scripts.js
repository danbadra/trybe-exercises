// Exercícios 1

        // parentNode: retorna o nó pai.

        // parentElement: retorna o elemento pai.

        // childNodes: retorna um NodeList com todos os nós filhos.

        // children: retorna um HTMLCollection com todos os elementos filhos.

        // firstChild: retorna o primeiro nó filho.

        // firstElementChild: retorna o primeiro elemento filho.

        // lastChild: retorna o último nó filho.

        // lastElementChild: retorna o último elemento filho.

        // nextSibling: retorna o próximo nó.

        // nextElementSibling: retorna o próximo elemento.

        // previousSibling: retorna o nó anterior.

        // previousElementSibling: retorna o elemento anterior.


// // Acesse o elemento elementoOndeVoceEsta.

// document.querySelector("#elementoOndeVoceEsta");

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// let pai = document.querySelector("#elementoOndeVoceEsta").parentNode;

// pai.style.color = "red";

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");

// primeiroFilhoDoFilho.innerText = "Texto do primeiro filho do filho.";

// // Acesse o primeiroFilho a partir de pai.

// document.querySelector("#pai").firstElementChild;

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

// document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

// document.querySelector("#elementoOndeVoceEsta").nextSibling;

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

// document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// // Agora acesse o terceiroFilho a partir de pai.

// console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);

//  Exercícios 2

// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById("pai");
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta"
pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeVoceEsta = document.createElement("div");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta"
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const primeiroFilhoDoFilhoDoFilho = document.createElement("div");
primeiroFilhoDoFilhoDoFilho.id = "primeiroFilhoDoFilhoDoFilho"
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

console.log(document.getElementById("primeiroFilhoDoFilhoDoFilho").parentNode.parentNode.nextElementSibling);
