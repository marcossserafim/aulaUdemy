let valor // não iniciado
console.log(valor)

// o interessante é não criar nada undefined deixar que ele crie sozinho

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! na há nada definido

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!! produto.preco)
console.log(produto)

produto.preco = null // sem preço serve pra quando vc quer colocar de graça ou esta sem um valor
console.log(!!produto.preco)
console.log(produto)