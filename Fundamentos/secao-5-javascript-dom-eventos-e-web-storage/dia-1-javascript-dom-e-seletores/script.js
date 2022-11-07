// Exercícios 1
    // document.getElementById("page-title").innerText = "Game of Thrones";

    // document.getElementById("second-paragraph").innerText = "Personagens da Série";

    // const subtitle = document.getElementById("subtitle");
    // subtitle.innerText = "História da Série";
    // subtitle.style.padding = "20px";

    // const paragraph = document.getElementById("paragraph");
    // paragraph.style.color = "red";

// Exercicios 2
document.getElementsByClassName("paragrafo")[0].style.color = "red";

const paragrafos = document.getElementsByClassName("paragrafo");

for(i = 0; i < paragrafos.length; i += 1){
    paragrafos[i].style.color = "blue";
}

document.getElementsByTagName("h4")[0].style.color = "orange";
