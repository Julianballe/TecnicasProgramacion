// 5. En un banco se procesan datos de las cuentas corrientes de
// sus clientes. De cada cuenta corriente se conoce:
// número de cuenta y saldo actual. El ingreso de datos debe
// finalizar al ingresar un valor negativo en el número de cuenta.
// Se pide realizar un programa que lea los datos de las cuentas
// corrientes e informe:
// a)De cada cuenta: número de cuenta y estado de la cuenta
// según su saldo, sabiendo que:
// Estado de la cuenta 'Acreedor' si el saldo es >0.
// 'Deudor' si el saldo es <0.
// 'Nulo' si el saldo es =0.
// b) La suma total de los saldos acreedores

do{
let nroCuenta = prompt("Ingrese Numero de Cuenta");
let saldo = prompt("Ingrese su saldo")
if(saldo>0){
    alert("N° de Cuenta: " + nroCuenta)
    alert("Saldo: $ " + saldo)
    alert("Estado de cuenta: Acreedor")
    sumaSaldrAcrredores = sumaSaldrAcrredores + saldo
}else if(saldo<0){
    alert("N° de Cuenta: " + nroCuenta)
    alert("Saldo: $ " + saldo)
    alert("Estado de cuenta: Deudor")

}else {
    alert("N° de Cuenta: " + nroCuenta)
    alert("Saldo: $ " + saldo)
    alert("Estado de cuenta: Nulo")
}
}while (nroCuenta<=0);
    alert("la suma total de los saldos de acreedores es de $ " + sumaSaldrAcrredores);
