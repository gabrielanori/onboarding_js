console.log("=== ESCOPO ===");

var escopo = "global";

function testaEscopo() { // qdo colocamos o var escopo dentro da função ele nao vai mais ler como principal a de fora pq ele faz uma leitura geral primeiro de todas e estao dentro ja dela, desta forma vai voltar como se vc ainda nao tivesse falado quem ela era naquele momento, no primeiro console.log
    // Qdo eu uso var dentro de uma função criamos um escopo exclusivo para aquela função podendo gerar problemas
   // var escopo; // cria a variável em memória porém ela fica indefinida. Na cabeça dele ele pega a var la embaixo e diz e vc ainda nao atribuiu, pega todas as variaveis espalhadas pela funcao e coloca la em cima
    console.log(escopo); //global...  und? apenas se eu colocar aqui dentro:   var escopo = "local"
    escopo = "local";// se eu tiro o var e deixo so o escopo o primeiro console.log nao fica mais undefined
    //var escopo = "local"; // esse var soh existe aqui dentro. Caso específico do VAR
    aberta = true; //global implicita eu consigo usar fora da função como se eu tivesse jogado ela pra fora, mas pode ser perigoso, pode sujar outra variavel q esta realmente no escopo global, posso apagar informações de fora ou atropelar o q esta dentro
    // colocando o var eu evito q ela vire variavel global implicita, fica fechada dentro da função
    //LET versão melhorada 
    console.log(escopo); // local

}

testaEscopo();
