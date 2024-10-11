//Ejercicio 1: Resta en bucle
let variableDiez = 10;
while(variableDiez>0){
  console.log(variableDiez),
  variableDiez--;
}

//Ejercicio 2:Do while
let nroIngresado;
do{
  nroIngresado = prompt("Ingrese un número mayor a 100: ");
}while(nroIngresado<100)
console.log("Ingresó el número: ",nroIngresado);
