function mostrarRaizQuadrada() {
    var inNumero = document.getElementById('inNumero')
    var outRaiz = document.getElementById('outRaiz')

    var numero = Number(inNumero.value)
    var resposta = ""
    var raizQuadradaNumero = parseInt(Math.sqrt(numero))

    if (numero == "" || numero <= 0 || isNaN(numero)) {
        alert("Informe um número válido!")
        inNumero.focus()
        return
    } else if ((raizQuadradaNumero * raizQuadradaNumero) == numero) {
        resposta = "A raiz quadrada de " + numero + " é: " + Math.sqrt(numero)
        outRaiz.textContent = resposta
    } else {
        resposta = ("Não há raiz exata para: " + numero)
        outRaiz.textContent = resposta
    }
}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarRaizQuadrada)