console.log("=== OBJETOS ===");

/*
                 OBJETO
               /        \
  CARACTERISTICAS       AÇÕES
    como ele é       o q é capaz de fazer     


                 CARRO
               /        \
  CARACTERISTICAS       AÇÕES
    batido              ligar()
    econ                desligar()
    ar                  acelrar()
    cor                 freiar()
    pot                 buzinar()
    ano                 
    modelo
    fabric

                 PESSOA
               /        \
  CARACTERISTICAS       AÇÕES
    peso              andar()
    altura            beber()
    cor cabelo        falar()
    cor pele          comer()
    idade             dormir()
    nome               
    etinia
*/ 

// Sintaxe Literal
const carro = {}; // quando mandarmos logar alguma coisa la no console da pagina e ele aparecer assim {} é pq estou trabalhando com um objeto, neste exemplo o objeto esta vazio
// JavaScript permite que vc crie objetos de 2 formas: voce pode começar com objeto vazio e ir linha a linha construindo montando incrementando seu obj (uma abordagem sintatica que o JS tem) e tem varios casos de uso no dia a dia

//Características ==> Propriedades

// Dot Notation 
// objeto.propriedade = valor; é uma caracteristica q usamos pra ir criando e adicionando caracteírticas aos seus objetos
carro.modelo = "Uno"; // acrescentei esta propriedade dentro do objeto {modelo: "Uno"}
carro.ano = 2020;
carro.economico = true;


// Bracket Notation
// objeto["propriedade"] = valor;
carro["cor"] = "amarelo";
carro["potencia"] = 1.6;
carro["ar"] = false


// Ações ==> Métodos
// instruções funções comandos
//Dot Notation
//objeto.metodo = function() {}
carro.ligar = function() {
  return "ON";
}

carro.desligar = function() {
  return "OFF";
}

//Bracket Notation
// objeto["metodo"] = function() {}
carro["buzinar"] = function() {
return "Fom FOM"

}

console.log(carro);
