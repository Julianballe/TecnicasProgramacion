
//Ingresá un número natural y te devuelvo la suma de este y los naturales anteriores

{
let num=parseInt(prompt("Ingresa un numero natural y te devuelvo la suma de es este y los naturales anteriores"))
let cont=1
let suma=0

while(cont<=num){
    suma=suma+cont
    cont++
}

alert("La suma es: "+suma)
}