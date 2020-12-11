console.log("=== FUNCOES ===");

// Funções Nomeadas (criar uma função é criar um comando, criar uma instrução e adicionar na minha página pq a instrução vai resolver algum problema)
function soma (n1, n2) { // executa essa instrução
    let resultado = n1 + n2; //Processamento //implementação de uma função 
    //console.log(resultado);
    return resultado; // resposta do processamento
}

console.log( soma(4, 8) ); //para pegar o resultado dessa informação preciso do console.log

// Funções Anônimas
let sum = function (n1, n2) { // associa a esta variável, atribui a esta variável a estrutura da função anonima
 let result = n1 + n2;
 return result;
}

console.log( sum(8, 7) );