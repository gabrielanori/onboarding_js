console.log("")
console.log("=== PARADIGMAS ===")

//paradigmas formatos padrões que posso adotar nos codigos

// Sintaxe Literal
let escola = "Caelum";
let tempo = 15;




// Sintaxe OOP
let school = new String("Caelum");
let time = new Number(15);



console.log("escola", escola, typeof escola, escola.constructor);
console.log("school", school, typeof school, school.constructor);

console.dir(String.prototype); // mostra no console, la na pag todos os comandos que conseguem manipular strings
// API recurso disponível ... comandos dentro da estrutura da linguagem, neste caso recursos disponíveis para mexer com o texto

console.log("tempo", tempo, typeof tempo);
console.log("time", time, typeof time);

console.dir(Number.prototype); //API (recursos diponiveis) Colocando dessa forma no console da pag podemos ver todos os recursos disponiveis para NUMBER, vai expor a API
console.dir(Boolean.prototype); //API (recursos diponiveis)
console.dir(Date.prototype);
console.dir(Object.prototype);
console.dir(Function.prototype);
console.dir(Array.prototype);
console.dir(RegExp.prototype);
console.dir(Math); // API matemática


// DOCUMENTAÇÃO DAS FERRAMENTAS DAS LINGUAGENS => https://devdocs.io/
