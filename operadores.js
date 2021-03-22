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


// DESAFIO 1
const idade = 17
// VERIFICAR SE A PESSOA É MAIOR IGUAL A 18 ANOS
// SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR A ENTRADA
if (idade >= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear entrada')
}

// SE A PESSOA TIVER 17 ANOS
// AVISAR PARA VOLTAR QUANDO FIZER 18
if (idade === 17) {
  console.log('Volte quando tiver 18')
}