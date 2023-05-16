//Se ingresa el código del empleado y el número de
	//horas trabajadas, y el valor por hora. Calcular el Sueldo bruto
	//y el Sueldo neto considerando la siguiente tabla
	//de descuento:Valor de hora:
	//Cod.201: Empleado de Finanzas= $ 600,00
	//Cod.202: Empleado de logística= $ 750,00
	//Menor 500 = No hay descuento
	//Entre 501 y 1000 = 2%
	//Entre 1001 y 4000 = 8%
	//Entre 4001 y 8000 = 15%
	//Mayor a 8000 = 30%

    alert("Ingrese su codigo de Empleado")
    let cod=prompt("COD.201: Empleado de Finanzas  |  COD.202: Empleado de logística")
    let horas=prompt("Ingrese el número de horas trabajadas")
    if (cod===201){
        preciohora=600*horas
    }else {
        preciohora=750*horas
    }
    if (horas>500 && horas>=1000){
        preciodesc=preciohora*0.2
    }else if (horas>1000 && horas<=4000){
        preciodesc=preciohora*0.8
    }else if (horas>4000 && horas<=8000){
        preciodesc=preciohora*1.5
    }else if (horas>8000){
        preciodesc=preciohora*30
    }else alert("Usted no posee descuento, su sueldo neto es de: $" + preciohora)
    alert("El sueldo bruto es de: $" + preciohora)
    alert("El sueldo neto es de: $" + (preciohora-preciodesc))

