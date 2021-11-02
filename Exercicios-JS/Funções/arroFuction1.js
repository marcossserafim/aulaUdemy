let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // retorn implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // possiu um parametro
console.log(ola())