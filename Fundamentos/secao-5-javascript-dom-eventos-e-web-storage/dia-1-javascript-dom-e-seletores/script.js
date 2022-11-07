// Altera a cor de fundo das tarefas urgentes

document.getElementById("header-container").style.backgroundColor = "green";

let tarefasUrgentes = document.querySelectorAll(".emergency-tasks");

for(i = 0; i < tarefasUrgentes.length; i += 1){
    tarefasUrgentes[i].style.backgroundColor = "salmon";
}

// Altera a cor de fundo dos subtítulos urgentes

let titulosTarefasUrgentes = document.querySelectorAll(".emergency-tasks h3");

for(i = 0; i < titulosTarefasUrgentes.length; i += 1){
    titulosTarefasUrgentes[i].style.backgroundColor = "purple";
}

// Altera a cor de fundo das tarefas não urgentes

let tarefasNaoUrgentes = document.querySelectorAll(".no-emergency-tasks");

for(i = 0; i < tarefasNaoUrgentes.length; i += 1){
    tarefasNaoUrgentes[i].style.backgroundColor = "yellow";
}

// Altera a cor de fundo dos subtítulos não urgentes

let titulosTarefasNaoUrgentes = document.querySelectorAll(".no-emergency-tasks h3");

for(i = 0; i < titulosTarefasNaoUrgentes.length; i += 1){
    titulosTarefasNaoUrgentes[i].style.backgroundColor = "black";
}

// Altera o backgroundColor do footer

document.getElementsByTagName("footer")[0].style.color = "white";
document.getElementsByTagName("footer")[0].style.backgroundColor = "darkGrey";

