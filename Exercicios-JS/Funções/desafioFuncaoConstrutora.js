function Pessoa(nome) {
    this.nome = nome
    

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jõao')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 =  criarPessoa('Joaquim')
p2.falar()

function criarPessoas(){
    return{
        nome:"José"
    }
}

console.log(criarPessoas())