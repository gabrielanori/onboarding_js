console.log("=== REGEX ===");

/* 



METACARACTERES

^INCIO DA DA LINHA
$ FIM DA LINHA

[i-f] LISTA PERMITIDA (INTERVALO) ESSE É UM EXEMPLO PODERIA SER [A-Z]
{min,max} QUANTIFICADOR
\c ESCAPE (CARACTERIES ESPECIAIS)
? OPCIONAL

\d APENAS DIGITOS
\w CONJUNTO ALFANUMERICO
() AGRUPADOR

*/

// CEP 1: ^[0-9]{5}\-?[0-9]{3}$
// CEP 2: ^\d{5}\-?\d{3}$
//EMAIL:  ^[A-z0-9\.\-\_]{1,}\.\w{1,}(\.\w{2})?$
//PLACA DE CARRO: ^[A-z]{3}\-\d{4}$

// let meuCep = prompt("Digite seu CEP?");
let meuCep =  "08030-190";
console.log(meuCep, typeof meuCep);

//Regex - Sintaxe Literal
let regexCep = /^\d{5}\-?\d{3}$/;
console.log(regexCep);

// objetoRegex.test(string)
// objetoRegex.exec(string)
// objetoString.match(regex)   Pega um obj q eh uma string e pega o obj referencia API de String do JavaScript


console.log(
    regexCep.test(meuCep) // esse mostra se eh true ou false o q escrevi cep no prompt

);

console.log(
    regexCep.exec(meuCep) // esse mostra se eh true ou false o q escrevi cep no prompt

);

console.log(
    meuCep.match(regexCep) // volta null match ou exec qdo nao há correspondencia na expressão ou no valor de entrada. Pega a tua String e casa com a expressao reg

);