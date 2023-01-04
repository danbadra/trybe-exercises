// TODO - Exercício 1
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:
// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

    // const generateEmail = (nome) => {
    //     const email = nome.toLowerCase().replace(' ', '_');
    //     return {nome, email: `${email}@trybe.com`};
    // }

    // console.log(generateEmail('Daniel Badra'));

    // const newEmployees = (callback) => {
    //     const employees = {
    //     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    //     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    //     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    //     }
    //     return employees;
    // };

    // console.log(newEmployees(generateEmail));

// TODO - Exercício 2
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

    // const verificaNumero = (number, myNumber) => number === myNumber;

    // const sorteio = (myNumber, callback) => {
    //     let number = Math.floor(Math.random() * 5);
    //     const verificacao = (callback(number, myNumber)) ? 'Parabéns, você ganhou!' : 'Tente novamente';
    //     console.log(number)
    //     return verificacao;
    // };

    // console.log(sorteio(3, verificaNumero));

// TODO - Exercício 3
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
    // Uma resposta correta adiciona 1 ponto à pontuação final;
    // A ausência de uma resposta não altera a pontuação (quando for “N.A”);
    // Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, respostas) => {
    if(respostas === gabarito){
        return 1;
    }
    if(respostas === 'N.A'){
        return 0;
    }
    else {
        return -0.5;
    }
};

const pontuacao = (gabarito, respostas, callback) => {
    let contagem = 0;

    for(let index = 0; index < gabarito.length; index += 1){
        const ultimaVerificacao = callback(gabarito[index], respostas[index]);
        contagem += ultimaVerificacao;
    }

    return `A sua pontuação foi: ${contagem}`;
};

console.log(pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));