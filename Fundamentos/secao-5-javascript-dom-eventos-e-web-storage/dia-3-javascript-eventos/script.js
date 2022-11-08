// Parte 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


const createDaysOfTheMonth = () => {
    let days = document.getElementById("days");

    for(index = 0; index < decemberDaysList.length; index += 1){
        
        let diaAtual = decemberDaysList[index];
        let day = document.createElement('li');
        day.innerText = diaAtual;

        if (diaAtual === 24 || diaAtual === 31) {
            day.className = "day holiday";
            days.appendChild(day);
        } else if (diaAtual === 4 || diaAtual === 11 || diaAtual === 18) {
            day.className = "day friday";
            days.appendChild(day);
        } else if (diaAtual === 25) {
            day.className = "day friday holiday";
            days.appendChild(day);
        } else {
            day.className = "day";
            days.appendChild(day);
        }
        console.log();
    }
}

createDaysOfTheMonth();

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createHolidayButton = (nomeDoBotao) => {
    let buttonsContainer = document.querySelector('.buttons-container');

    let feriadoButton = document.createElement('button');
    feriadoButton.id = 'btn-holiday';
    feriadoButton.innerText = nomeDoBotao;
    buttonsContainer.appendChild(feriadoButton);
}

createHolidayButton('Feriados');


// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".

const displayFeriados = () => {

    let botaoFeriados = document.querySelector('#btn-holiday');
    let feriadosList = document.querySelectorAll(".holiday");
    let originalColor = 'rgb(238,238,238)';
    let setNewColor = 'green';

    botaoFeriados.addEventListener('click', () => {
        for(index = 0; index < feriadosList.length; index += 1){
            // Se a cor do elemento for a nova cor 
            if (feriadosList[index].style.backgroundColor === setNewColor){ 
                feriadosList[index].style.backgroundColor = originalColor;
                feriadosList[index].style.color = '#666';
            } else {
                // Se a cor do elemento for de qualquer outra cor
                feriadosList[index].style.backgroundColor = setNewColor;
                feriadosList[index].style.color = 'white';
            } 

        }
    });
}

displayFeriados();

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createFridayButton = (nomeDoBotao) => {
    let buttonsContainer = document.querySelector('.buttons-container');
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = nomeDoBotao;
    buttonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.

const getFridays = (firdaysArray) => {
    let sextasList = document.querySelectorAll('.friday');
    let buttonFriday = document.querySelector('#btn-friday');
    let newText = 'Sextou!';  

    buttonFriday.addEventListener('click', () =>{
        for(index = 0; index < sextasList.length; index += 1){
            if(sextasList[index].innerHTML !== newText){
                sextasList[index].innerHTML = newText;
            } else {
                sextasList[index].innerHTML = firdaysArray[index];
                // A diferença entre o sextasList[index] e o fridaysArray[index] é que o primeiro retorna  
            }
        }
    })
}

let decemberFridays = [4, 11, 18, 25];

getFridays(decemberFridays);

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.

const zoomIn = () => {}

const zoomOut = () => {}



// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".






// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".





// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.





// Parte 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).





// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.




