const itens = ['computador', 'telefone', 'mouse' ,'teclado']

console.log(itens.length)

 itens.splice(2,1)

console.log(itens)

let buscar = itens.find((iten) => {
    return iten == 'computador'
} )

if(buscar == undefined) {
    console.log("o Item não foi emcontrado")
} else {
    console.log(buscar)

}

itens.splice(1,1)
console.log(itens)