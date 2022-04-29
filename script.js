//criar variavel inicio,fim e passo
function contar() {
    var iniciotxt = window.document.getElementById('inicio')
    var fimtxt = window.document.getElementById('fim')
    var passotxt = window.document.getElementById('passo')

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)

    var contagem = window.document.getElementById('contagem')
    var resultado = window.document.getElementById('resultado')

    if (inicio >= fim) {
        contagem.innerHTML = ""
        resultado.innerHTML = "<strong>Impossível Contar!, O inicio está maior ou igual ao fim.</strong>"
    } else if (passo > fim ) {
        contagem.innerHTML = "Preparando Contagem..."
        window.alert('[ERRO], passos maiores do que fim.')
        resultado.innerHTML = ""
    } else if (passo == 0) {
        resultado.innerHTML = ""
        contagem.innerHTML = "<strong>Impossível Contar!, Não é possível contar de 0 em 0</strong>"
    } else {
        resultado.innerHTML = ``
        contagem.innerHTML = "Contando:"
        
        for (var c = inicio; c < fim; c += passo) {
            resultado.innerHTML += `${c} 👉 `
        }

        resultado.innerHTML += `🏁`
    }

}