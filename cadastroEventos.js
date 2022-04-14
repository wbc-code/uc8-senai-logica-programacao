// ATIVIDADE ONLINE 2 - UC8
// Sistema de Cadastro de Eventos

// Validação de Data
let dataAtual = new Date("year, month, day"); 
let dataDoEvento = new Date("year, month, day"); 

if (dataDoEvento > dataAtual) {
    console.log("Evento Permitido")
} else {
    console.log("Cadastro Não Permitido - Data Invalida")
}

// Validação de idade
let idade = 36;

if(idade >= 18) {
    console.log("Cadastro Permitido")
} else {
    console.log("Cadastro não permitido para menores de 18 anos")
}

// Validação de número de participantes/palestrantes
let listaParticipantes = ["Wesley", "Eduardo", "Odirley"]

if (listaParticipantes.length < 100) {
    console.log ("Cadastro Permitido")
} else {
    console.log ("cadastro Não Permitido - Limite Excedido")
}
