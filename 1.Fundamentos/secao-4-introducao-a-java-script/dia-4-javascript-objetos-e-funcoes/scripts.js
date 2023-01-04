//  Exemplo 1

    let diasDaSemana = {
        1: 'domingo',
        2: 'segunda',
        3: 'terça',
        4: 'quarta',
        5: 'quinta',
        6: 'sexta',
        7: 'sábado',
      };
    
      diasDaSemana[1]; // SyntaxError: Unexpected number
      console.log(diasDaSemana['1']); // domingo

    // No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.

// Exemplo 2

    let conta = {
        agencia: '0000',
        banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
        },
    };
    
    let infoDoBanco = 'banco';
    console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
    console.log(conta[infoDoBanco]['nome']); // TrybeBank
    
    console.log(conta.agencia); // 0000
    console.log(conta['agencia']); // 0000
    
    console.log(conta.banco.cod); // 012
    console.log(conta['banco']['id']); // 4

// Exemplo 3

    let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
        },
    };
    
    console.log(usuario['id']); // 99
    console.log(usuario.email); // jakeperalta@gmail.com
    
    console.log(usuario.infoPessoal.endereco.rua); // Smith Street
    console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// Exercício 1

let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    }
}

console.log(player.nome);


