function Converter() {
    var valorElemento = document.getElementById("valor").value
    var valorEmDolarNumerico = parseFloat(valorElemento)

    var moeda = document.getElementById("lista").value
    console.log(moeda);

    switch (moeda) {
        case "dolar":
            var valorEmReal = valorEmDolarNumerico / 5.24
            var valorConvertidoFixo = valorEmReal.toFixed(2)
            var valorConvertido = "O resultado em dolar é $ " + valorConvertidoFixo;
            break
        case "euro":
            var valorEmReal = valorEmDolarNumerico / 6.20
            var valorConvertidoFixo = valorEmReal.toFixed(2)
            var valorConvertido = "O resultado em Euro é " + valorConvertidoFixo;
            break
        case "bitcoin":
            var valorEmReal = valorEmDolarNumerico / 245810
            var valorConvertido = "O resultado em Bitcoin é " + valorEmReal;
            break
    }

    var elementoValorConvertido = document.getElementById("valorConvertido")
    elementoValorConvertido.innerHTML = valorConvertido;
}