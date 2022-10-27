// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

    // function verificaPalindrome(palavra){
    // // A linha abaixo faz os seguintes passos: (1) transforma a string em uma array, sendo cada letra um elemento; (2) inverte a ordem das letras; e (3) junta novamente na forma de string.
    //    let reverse = palavra.split("").reverse().join("");

    //     if(reverse === palavra){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    // console.log(verificaPalindrome("arara"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    // function indiceDoMaior(numeros){
    // let maiorIndice = 0;

    // for(let indice in numeros) {
    //     if(numeros[maiorIndice] < numeros[indice]){
    //         maiorIndice = indice;
    //     }
    // }

    // return maiorIndice
    // }

    // console.log(indiceDoMaior([14, 32, 1, 5, 9]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    // function indiceDoMenor(numeros) {
    //     let menorIndice = 0;

    //     for(let indice in numeros) {
    //         if(numeros[indice] < numeros[menorIndice]){
    //             numeros[indice] = menorIndice;
    //         }
    //     }

    //     return menorIndice
    // }

    // console.log(indiceDoMenor([37, 4, 40, 1, 3, 5]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    function maiorNome(nomes) {
        let maiorString = nomes[0];

        for(let nome in nomes){
            // Para cada nome da lista "nomes", se o tamanho da maiorString for menor que o tamanho do nome da lista "nomes", então esse novo nome deverá substituir o maiorString anterior.
            if(maiorString.length < nomes[nome].length){
                maiorString = nomes[nome];
            }
        }

        return maiorString;
    }

console.log(maiorNome(["Daniel", "Luiza", "Gustavo"]));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros){
    let contagem = 0



}

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

    // function somatorio(N){
    //     soma = 0

    //     for(let indice = 0; indice <= N; indice += 1) {
    //         soma = soma + indice;
    //     }

    //     return soma
    // }

    // console.log(somatorio(50));

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra){

    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle = true

    // Percorre todas as letras da palavra e

    for(let index = 0; index < palavra; index += 1){
        

    }



}
