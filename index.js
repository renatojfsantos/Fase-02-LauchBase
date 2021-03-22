// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const aluno01 = 'Renato'
const notaAluno01 = 9.8

const aluno02 = 'Mariah'
const notaAluno02 = 10

const aluno03 = 'Ana Liz'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns`)
} else {
  console.log('A média é menor que 5')
}
