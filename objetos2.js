console.log("=== OBJETOS - PARTE 2 ===");

/*
                 AUTO
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
*/

// Sintaxe Literal
const auto = {
    status: false,
    modelo: "Fox",
    ano: 2019,
    economico: true,
    cor: "vermelho",
    potencia: 1.6,
    ligar: function() {
        return this.status = true; //quando usamos o THIS dentro do método e esse método esta atrelado a um obj, se refere dentro do contexto trabalhado, nesse caso eh o auto, representação do obj no contexto que estamos trabalhando
    },
    desligar: function() {
        return auto.status = false;
    }
 
}; // cria um obj equivalente ao: const auto = new Object();
// todo objeto tem um protótipo,da onde ele nasceu, nasce a partir de algum construtor _proto_: Object




console.log(auto);