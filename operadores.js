/* ========================================
  OPERADORES DE COMPARAÇÃO

  >   MAIOR
  <   MENOR
  >=  MAIOR IGUAL A
  <=  MENOR IGUAL A
  ==  IGUAL A
  === IGUAL E DO MESMO TIPO
  !=  DIFERENTE DE
  !== DIFERENTE, INCLUSIVE DO TIPO

========================================= */
// console.log(5 > 4) // true
// console.log(5 < 4) // false
// console.log(5 >= 4) //true
// console.log(4 <= 4) //true

// console.log(4 == "4") //true
// console.log(4 === "4") //false
// console.log(4 != "5") //true
// console.log(4 !== "5") //true


// // DESAFIO 1
// const idade = 17
// // VERIFICAR SE A PESSOA É MAIOR IGUAL A 18 ANOS
// // SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR A ENTRADA
// if (idade >= 18) {
//   console.log('Deixar entrar')
// } else {
//   console.log('Bloquear entrada')
// }

// // SE A PESSOA TIVER 17 ANOS
// // AVISAR PARA VOLTAR QUANDO FIZER 18
// if (idade === 17) {
//   console.log('Volte quando tiver 18')
// }


/* ========================================
  OPERADORES LÓGICOS

  &&  "E" As duas condições devem ser verdadeiras
      para que a condição final seja verdadeira.
  
  ||  "OU"  Uma das condições devem ser verdadeira
      para que a condição final seja verdadeira.
  
  !   "NÃO" Nega uma condição

  ========================================= */

// console.log(5 == 5 && 6 == 6) //true
// console.log(5 == 5 && 6 != 6) //false

// console.log(5 != 5 || 6 == 6) //true
// console.log(5 == 5 || 6 != 6) //true

// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false


// DESAFIO 1
const idade = 18
// VERIFICAR SE A PESSOA É MAIOR IGUAL A 18 ANOS
// SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR A ENTRADA
// SE A PESSOA TIVER 17 ANOS
// AVISAR PARA VOLTAR QUANDO FIZER 18
if (!(idade >= 18) || idade === 17) {
  console.log('Bloquear entrada')
} else {
  console.log('Deixar entrar')
}

// dar bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos




/* ========================================
OPERADORES ARITIMÉTICOS

*   MULTIPLICAÇÃO
/   DIVISÃO
%   RESTO DA DIVISÃO
+   ADIÇÃO
-   SUBTRAÇÃO

========================================= */

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //0.5
console.log(2 + 2) //4
console.log(2 - 2) //0