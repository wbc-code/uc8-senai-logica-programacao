// Atividade do Encontro Remoto 2 - UC8

// SITUAÇÃO PROBLEMA
// Percorrer de Zero até o número de alunos
// se o número for par, escreva 'par' e o numero correspondente
// se o número for ímpar, escreva 'ímpar' e o número correspondente
// se o número for ZERO, escreva ZERO

// for
let numeroDeAlunos = 10;

for (contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)
    
    if (contador === 0) {
        console.log("O numero atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log("O numero " + contador + " é PAR")
    } else {
        console.log("O numero " + contador + " é IMPAR")
    }
}

// While
let numeroDeAlunos = 10;
let contador = 0;

while (contador <= numeroDeAlunos) {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if (contador % 2 != 0) {
        console.log("O numero " + contador + " é IMPAR")
    } else {
        console.log("O numero " + contador + " é PAR")
    }
    contador++;
}

// Do..While
let numeroDeAlunos = 10;
let contador = 1;

do {
    if (contador === 0) {
        console.log("O numero atual é ZERO")
    } else if (contador % 2 != 0) {
        console.log("O numero " + contador + " é IMPAR")
    } else {
        console.log("O numero " + contador + " é PAR")
    }
    contador++;

} while (contador <= numeroDeAlunos);

// Array de Alunos
let listaDeAlunos = ["Eduardo", "Juh", "Cleber", "Wesley", "Adriano"];

//for..of

    for (const aluno of listaDeAlunos) {
        console.log(aluno);    
    }
    
//foreach
    
    listaDeAlunos.forEach(element => {
        console.log(element)
    });
    
//OPERADORES LÓGICOS - TABELA VERDADE

AND (E)(&&)
true && true -> true
true && false -> false
false && true -> false
false && false -> false

OR (OU)(||)
true || true -> true
true || false -> true
false || true -> true
false || false -> false

NOT (NÂO)(!)
!false -> true
!true -> false
