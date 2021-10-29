function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throuw 'messenger'
    throw {
        nome: erro.name,
        msg: erro.messenger,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase()+'!!!') 
}   catch(e){
    tratarErroELancar(e)
}   finally {
    console.log('final')
}

}

const obj = { name:'Roberto'}
imprimirNomeGritado(obj)