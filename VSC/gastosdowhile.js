// Algoritmo enc008_03Dowhile
// Definir presupuesto, precioArt, totalCompra Como Real
// Escribir "Ingrese su presupuesto a gastar"
// Leer presupuesto
// Repetir
// Escribir "Ingrese el precio del producto"
// Leer precioArt
// totalCompra<-totalCompra+precioArt
// Hasta Que totalCompra>=presupuesto
// Escribir "La suma total de lo facturado es: $ ", totalCompra
// FinAlgoritmo

{
	let presu = new Number()
	let precioprod = new Number()
	let total = new Number()
	presu =Number(prompt("Ingrese el presupuesto a gastar"))
	do {
		precioprod = Number(prompt("Ingrese el precio del producto"))
		total = total+precioprod
	} while (total<presu)
	alert("La suma total de lo facturado es: $ "+ total)

}
