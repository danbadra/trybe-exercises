// Exercício 1

// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// Copie o código abaixo e rode-o para verificar sua saída:

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

    // let pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);


// Exercício 2

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;

    // function numeroAleatorio() {
    //     return Math.random()
    // }
    
    // const numeroAleatorio = () => Math.random;
    
    // console.log(numeroAleatorio());

// Exercício 3

// 🚀 Transforme a função hello em uma arrow function;

    // function hello(nome) {
    //     return `Olá, ${nome}!`
    // }
    // let nome = 'Ivan';
    // console.log(hello(nome));

    // const hello = (nome) => {return `Olá, ${nome}!`};
    // let nome = 'Ivan';
    // console.log(hello(nome));


// Exercício 4

// 🚀 Transforme a função nomeCompleto em uma arrow function;

    // function nomeCompleto(nome, sobrenome) {
    //     return `${nome} ${sobrenome}`
    // }
    // let nome = 'Ivan';
    // let sobrenome = 'Pires';
    // console.log(nomeCompleto(nome, sobrenome));

    // const hello = (nome, sobrenome) => {return `Olá, ${nome} ${sobrenome}!`};
    // let nome = 'Ivan';
    // let sobrenome = 'Pires';
    // console.log(hello(nome, sobrenome));

// Exercício 5

// 🚀 Altere a expressão if/else utilizando ternary operator;

    // let speed = 90;
    // const speedCar = (speed) => {
    // if (speed >= 120) {
    //     return `Você ultrapassou o limite de velocidade`;
    // } else {
    //     return `Você está na velocidade permitida`;
    // }
    // };
    // console.log(speedCar(speed));

    // let speed = 90;
    // const speedCar = (speed) => {
    // let radar = (speed < 120) ? 'Você está na velocidade permitida' : 'Você ultrapassou o limite de velocidade'
    // return radar
    // };
    // console.log(speedCar(speed));

