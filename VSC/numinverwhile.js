{
    let numero = parseInt(prompt("Ingrese un numero y te lo mostrare invertido"))
    let invertido = 0
    while (numero != 0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    alert(invertido)
};