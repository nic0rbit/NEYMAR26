var readline = require('readline');
     
console.log("+ _ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ _ +")
console.log("|                                              |");
console.log("|     1 - Comprar Passagem                     |");
console.log("|     2 - Consultar Voos                       |");
console.log("|     3 - Mapa de Assentos                     |");
console.log("|     4 - Emitir Ticket                        |");
console.log("|     0 - Encerrar o Programa                  |");
console.log("+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _+");

var opcao = readline.question("Escolha uma opção: ");
opcao = parseInt(opcao);
const totalAssentos = 24
var assentosOcupados = 0 

switch(opcao){
    case 1:
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("Você está em -> Consulta de Voos");
        var nome = readline.question("Nome: ");
        var sobrenome = readline.question("Sobrenome: ");
        var idade = readline.question("Idade: ");
        var assento = readline.question("Assento: ");
        var origem = readline.question("Origem: ");
        var destino = readline.question("Destino: ");
        console.log("                                              ");
        console.log("              *Resumo da Compra*              ");
        console.log("                                              ");
        console.log("Cliente: " + nome + " " +sobrenome);
        console.log("Idade: " + idade);
        console.log("Assento: " + assento);
        console.log("Voo: " + origem + " X " + destino);
        console.log("Status do Voo: Confirmado");
        console.log("                                              ");
        console.log("Valor: R$ 3.500");
        break

    case 2:
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("                                              ");
        console.log("Você está em -> Consulta de Voos");
        console.log("                                              ");
        console.log("Origem                X                Destino");
        console.log("----------------------------------------------");
        console.log("                                              ");
        console.log("Presidente Prudente                     Dublin");
        console.log("Presidente Prudente                      Ceará");
        console.log("Presidente Prudente                  São Paulo");
        console.log("Presidente Prudente                Nova Iorque");
        break
    
    case 3:
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("                                              ");
        console.log("Você está em -> Mapa de Assentos");
        console.log("                                              ");
        console.log("----------------------------------------------");
        for(let i = 1; i <= 12; i++){

            let linhaA = `A${1}: ${mapaAssentos['A' + i] || '-'}`;
            let linhaB = `B${1}: ${mapaAssentos['B' + i] || '-'}`;
            console.log(`${linhaA}\t\t${linhaB}`);
        }
        console.log(`Número de Assentos Disponíveis: " ${totalAssentos - assentosOcupados}`);
        console.log(`Número de Assentos Disponíveis: " ${assentosOcupados}`);
        break
        
    case 4:
        console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
        console.log("                                              ");
        console.log("Você está em -> Consulta de Voos")
        console.log("                                              ");
        console.log("**********************************************");
        console.log("* OBRIGADO POR VIAJAR CONOSCO                *")
        console.log("*                                            *");
        console.log("* Cliente: " + nome + " " + sobrenome +"     *");
        console.log("* Idade: " + idade + " Assento: " + assento+"*");
        console.log("* Origem/Destino: "+origem+" > "+destino+"   *");
        console.log("* Status do Voo: Confirmado                  *");
        console.log("*                                            *");
        console.log("**********************************************");
        break

    case 0:
        console.log("Você encerrou o programa")
        default:
            console.log("Comando Inválido")
}