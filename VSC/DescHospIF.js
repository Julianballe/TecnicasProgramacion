let edad = parseInt (prompt("Ingrese la edad del paciente"))
let hora = parseInt (prompt("Ingrese la cantidad de horas"))
let precio = 0;
if(hora<1){
    precio=3
}else if(hora>1 && hora<4){
    precio=20
}else if(hora>=4 && hora<10){
    precio=25
}else if(hora>=10){
    precio=40;
}if(edad>=17 && edad<=25){
    precio=precio + precio*0.2
}
alert ("el costo de la hospitalizacion es: $" + precio);