const { create } = require('domain');

const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const searchedSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!searchedSimpson) {
    // A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    // Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    // tendo como motivo o que passarmos para o `throw`.
    // Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
    throw new Error('id não encontrado');
  }

  return searchedSimpson;
}

async function eraseSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const searchedSimpson = simpsons.filter((simpson) => Number(simpson.id) !== 6 && Number(simpson.id) !== 10);
  return searchedSimpson;
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonMuntz() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
}

async function substituteSimpson(){
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

// Filtramos o array para remover o personagem Nelson
const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

// Criamos um novo Array contendo a personagem Maggie
const simpsonsWithMaggie = simpsonsWithoutNelson
  .concat([{ id: '5', name: 'Maggie Simpson' }]);
// com spread seria assim:
// const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

// Escrevemos o novo array no arquivo e retornamos a promise de escrita
return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  await readAll();
  const simpson = await getSimpsonById(1);
  console.log(simpson);
  const erasedSimpsons = await eraseSimpsons();
  console.log(erasedSimpsons);
  await createSimpsonsFamily();
  await addNelsonMuntz();
  await substituteSimpson();
}

main();