{
	var cantNota, cont, contApro, contDesa, nota, promApro, promDesa, sumaApro, sumaDesa;
	cantNota = prompt("Ingrese la cantidad de notas a promediar");
	cont = 1;
	contApro = 0;
	contDesa = 0;
	sumaApro = 0;
	sumaDesa = 0;
	while (cont<=cantNota) {
		nota = Number(prompt("Ingrese la "+cont+"° nota."));
		if (nota>=6 && nota<=10) {
			sumaApro = sumaApro+nota;
			contApro = contApro+1;
			promApro = sumaApro/contApro;
		} else if(nota<=6 && nota >=1) {
			sumaDesa = sumaDesa+nota;
			contDesa = contDesa+1;
			promDesa = sumaDesa/contDesa;
		}else{
			alert("Usted no ingreso un numero del 1 al 10, Reintentelo nuevamente")
		}
		cont++;
	}
	alert("El promedio de notas aprobadas es: "+ promApro);
	alert("El promedio de notas desaprobadas es: "+ promDesa);
}

