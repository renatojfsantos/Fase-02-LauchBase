// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const alunos = [
  {
    nome: "Renato",
    nota: 9.8
  },
  {
    nome: "Mariah",
    nota: 10
  },
  {
    nome: "Ana Liz",
    nota: 2
  }
]

const nomeDeAlunos = ["Renato", "Mariah", "Ana Liz"]

console.log(alunos[1])

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if (media > 5) {
  console.log(`A média foi de ${media}. Parabéns`)
} else {
  console.log('A média é menor que 5')
}
