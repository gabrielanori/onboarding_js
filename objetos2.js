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
    modelo: "Fox",
    ano: 2019,
    economico: true,
    cor: "vermelho",
    potencia: 1.0

}; // cria um obj equivalente ao: const auto = new Object();
// todo objeto tem um protótipo,da onde ele nasceu, nasce a partir de algum construtor _proto_: Object




console.log(auto);