console.log("=== ARRAY ===");

console.dir(Array.prototype); // todos os comandos que fazem parte da API de Array caixa de ferramentas que temos a disposicao para mexer com o q esta em baixo, em JavaScript

//Sintaxe Literal
let carros = ["HB20", "Toro", "Corsa", "Celta"]; // cada item deles tem um numero e é uma chave 0, 1, 2, 3
carros.push("IX35", "Uno"); // add no final do Array
carros.unshift("Ka", "Kombi"); // add no começo do array
carros.splice(4, 1, "Fit"); // o um quer dizer q quero apagar 1 item, o Fit ele fica no lugar daquela posição,  remover um item da tua lista
carros.splice(7, 1); // se eu quiser preservar coloco 0 zero, mas coloco 1 ele soh remove
carros.splice(2, 0, "Up"); // add um carro sem tirar a kombi, coloca emtre um e outro, escolho a posição q eu quero colocar o Up, coloco no 2 a Up
carros.sort(); //coloca em ordem alfabética, nem preciso colocar nada dentro, se fossenumerico ele tb ordenaria
carros.reverse(); // inverte um array, a lista se fosse 
carros.pop(); // remove o ultimo item do array
carros.shift(); // remove o primeiro item do array


console.log(carros);
//console.log(carros.constructor);

//procurando item pela chave e descobrindo seu indice
console.log( 
    carros.indexOf("Kombi"), 
    carros[carros.indexOf("Kombi")], 
    carros.includes("Kombi") // checa se o valor esta la dentro da lista e da true e false
    ); // da o valor e descobre a chave, devolve o número do índice

    console.log(carros[0]);
    console.log(carros[1]);
    console.log(carros[2]);
    console.log(carros[3]);
    console.log(carros[4]);
    console.log(carros[5]);

    // para resolver o problema de repetição colocamos um laço de repetição como FOR

for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
    console.log(element);
}
// explicação FOR: index começa no zero (let index = 0) enquanto index for menor que o tamanho do array (index < array.length) pega o indice e aumenta um, index++
// para aparecer o for já completo, digita for e seleciona o com quadradinho

function pegaCarro(nome, indice){ // outra forma de mostrar os arguments
    console.log("executed!", arguments[0], arguments[1]) // qdo eu coloco o 0 ele me da soh os argumentos da posição 0 ou seja o nome do carro, pego a informação pela posição
    console.log(indice, nome) // customizavel poderia ter colocado nomeDoCarro e posição,mas tenho q alterar la em cima tb
}

// função nomeada (callback)
carros.forEach(pegaCarro) // tenho uma lista de carros e para cada item dentro desta lista consigo executar uma operação, instrução uma função dentro dos parenteses... nao devemos colocar pegaCarro() pq DA A FUNÇÃO PARA O forEach EXECUTAR CALL BACK
// famoso CALL BACK: REGISTRA UMA FUNÇÃO PRA ELA SER EXECUTADA NO MOMENTO OPORTUNO 
// percorre a lista, então internamente para cada cara q ele encontrar ele executa ele chama esse cara  

// O q ele faz
// pegaCarro("Toro", 0)
// pegaCarro ("Kombo", 1)

// o FOREACH executa internamente e chama PEGACARRO executa e manda para o pegacarro as informações "Toro" e chave, posição "0", TRANSFERE DA LISTA PRA CA
// a saida no console fica assim executed! Arguments(3) ["Toro", 0, Array(6), callee: ƒ, Symbol(Symbol.iterator): ƒ]

// ARGUMENTS é genérico (só funciona dentro das funções) ex:  console.log("executed!, arguments") representa todos os dados que estão sendo enviados para uma função

//ITERAÇÂO explicação do forEach possibilidade de iterar esses itens, iteração repetição de uma ou mais ações.

console.log("===");

// função anonima (callback) neste caso fizemos embutido, nao precisamos declarar uma função nova fora do forEach e chama-la deppois aqui esta tudo junto dentro da função anonima
//a diferenca é que nao podemos aproveitar esse código em nenhum lugar apenas nesse ponto pq nao nomei
carros.forEach(function (carro) { // tenho uma lista de carros para cada item desta lista executo esta função interna, e esta função extrai (de uma lista de carros) nesta posição o nome deste carro
    console.log(arguments[0], carro) // duas maneiras de logar a informação
});



//Sintaxe OOp
let cars = new Array("Gol", "Palio", "Uno");

//console.log(cars);
//console.log(cars.constructor);

//length dimensão do array