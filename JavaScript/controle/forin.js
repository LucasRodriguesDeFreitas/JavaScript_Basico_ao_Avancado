const notas = [6,7,9,8,3]

for (i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 30,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}