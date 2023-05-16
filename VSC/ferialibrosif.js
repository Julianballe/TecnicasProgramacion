// Costo de entrada a una Feria del Libro.
	// En la Feria del Libro, los precios de las entradas tienen
	// descuentos por la cantidad de personas que ingresa
	// en grupos.
	// Los menores de 4 personas tienen descuento del 20 MOD 
	// el precio de entrada, los grupos de 4 personas y menos
	// de 10 personas tiene descuento del 35 MOD  del precio de
	// entrada y de 10 personas a más tienen descuento del 50 MOD .
	// Calcular cuánto pagará cada persona por el precio de
	// entrada y el monto total a pagar por el grupo.
	// A. Ingreso de datos.
	// B. Precio a pagar por una entrada.
	// C. Monto total por el grupo.
	// Valor entrada única: $ 650.00

    let per = parseInt(prompt("Ingrese la cantidad de personas en el grupo"))
    let precio = 650*per
    if (per<4){
        desc = precio*0.2
    }else if (per>=4 && per<10){
        desc = precio*0.35
    }else if (per>=10){
        desc = precio*0.35
    }else {desc = precio*0.5
    }
    let preciofinal = precio-desc
    alert("El precio final es: $" + preciofinal);