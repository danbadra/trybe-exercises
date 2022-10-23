// Exercise 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log();

    for (let index = 0; index < numbers.length; index += 1){
        console.log(numbers[index])
    }

    // ou (usando for/of)

    for (number of numbers){
        console.log(number)
    }

// 2. Some todos os valores contidos no array e imprima o resultado;

    let soma = 0

    for (index = 0; index < numbers.length; index += 1){
        soma += numbers[index];
    }

    console.log(soma)

// 3. Calcule e imprima a média aritmética dos valores contidos no array;

    let soma = 0
    
    for (index = 0; index < numbers.length; index += 1){
        soma += numbers[index];
    }

    let media = soma/numbers.length

    console.log(media);
    
// 4. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

    if (media > 20) {
        console.log("valor maior que 20")
    }
    else {
        console.log("valor menor ou igual a 20")
    }

// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

    let maior_numero = 0;

    for (let index = 0; index < numbers.length; index += 1){
   
        if (numbers[index] > maior_numero){
            maior_numero = [maior_numero - maior_numero] + numbers[index]
        }
    }

    console.log("O maior número da array numbers é " + maior_numero);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

    let impares = 0

    for(index = 0; index < numbers.length; index += 1){
        if(numbers[index] % 2 != 0){
            impares = impares + 1
        }
    }

    if(impares > 0){
        console.log("A array numbers possui " + impares + " números ímpares.")
    }
    else{
        console.log("Nenhum valor ímpar encontrado.")
    }

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

    let menor_numero = numbers[0];

    for (let index = 0; index < numbers.length; index += 1){
          if (numbers[index] < menor_numero){
            menor_numero = numbers[index]
        }
    }

    console.log("O menor número da array numbers é " + menor_numero);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

    array = []
    
    for(index = 0; index < 26; index += 1){
        array.push(index);
        console.log(array[index]);
    }

// 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

    array = []
        
    for(index = 0; index < 26; index += 1){
        array.push(index/2);
        console.log(array[index]);
    }
