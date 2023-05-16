//Realizar un ejercicio en el cual se visualicen
	//los números primos del 1 al 20.

for(let i=1;i<=20;i++){
	let num=1;
    let cont=0;
	while(num<=i){
		if(i%num==0){
            cont++;
    }num++;
	}if(cont==2){
		console.log("El numero, "+i+ " es primo ")
	}
}
