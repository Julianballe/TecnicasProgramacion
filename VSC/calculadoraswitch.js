//Ingresar dos números enteros y un operador
	//(+, -, x, /); según el operador ingresado, mostrar
	//la operación matemática que corresponde.

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let operador = prompt("Ingrese uno de estos operadores para hacer el calculo: +, -, x, / ")
switch(operador){
    case "+":
        alert(num1 + "+" + num2 + " Es igual a : " + (num1+num2))
        break;
    case "-":
        alert(num1 + "-" + num2 + " Es igual a : " + (num1-num2))
        break;
    case "x":
        alert(num1 + "*" + num2 + " Es igual a : " + (num1*num2))
        break;
    case "/":
        alert(num1 + "/" + num2 + " Es igual a : " + (num1/num2))
    
}