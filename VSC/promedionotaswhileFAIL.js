// Promedio de notas aprobadas y desaprobadas.
	// Dado N notas, calcular el promedio de las notas
	// aprobadas y el promedio de las notas desaprobadas.

{
let cantNotas = parseInt( prompt("Ingrese cantidad de notas para promediar"))
let cont=1
let contApro=0
let contDesa=0
let sumaApro=0
let sumaDesa=0
let promApro=parseInt()
let promDesa=parseInt()
while (cont<=cantNotas) {
     let nota=Number(prompt("Ingrese la" + cont + "°nota"))
    if(nota>=6){
             sumaApro=sumaApro+nota
             contApro=contApro+1
             promApro=sumaApro/cantNotas

    }
    else{
             sumaDesa=sumaDesa+nota
             contDesa=contDesa+1
             promDesa=sumaDesa/cantNotas
    }
    cont++
}
        alert("el promedio de notas aprobadas es de:" + promApro)
        alert("el promedio de notas desaprobadas es de:" + promDesa)

}


