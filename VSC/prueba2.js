// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).


	
	let cantnotas = prompt("Ingrese la cantidad de notas a ingresar porel sistema");
	let cont = 1
	let contapr = 0
	let contdesapr = 0
	let sumapr = 0
	let sumdesapr = 0
	
	let promapr = 0
	let promdesapr = 0

	while (cont<=cantnotas) {
		let nota =parseInt(prompt("Ingrese la "+cont+"nota."));
		if (nota>=6) {
			sumapr = sumapr+nota;
			contapr = contapr++
			promapr = sumapr/contapr;
		} else if (nota<=6){
			sumdesapr = sumdesapr+nota
			contdesapr = contdesapr++
			promdesapr = sumdesapr/contdesapr
		}
		cont++
		
	}
	alert("El promedio de notas aprobadas es: "+promapr)
	alert("El promedio de notas desaprobadas es: "+promdesapr)


