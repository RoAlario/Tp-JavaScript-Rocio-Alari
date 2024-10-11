//Ejercicio 1: numeros
const numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosDuplic=[];
for(let i=0; i<10; i++){
  numerosDuplic[i] = numeros[i]*2;
}
console.log("Números originales: ",numeros);
console.log("Números duplicados en su valor: ",numerosDuplic);

//Ejercicio 2: pares
let pares = [];
console.log("Primeros 10 números pares: ");
for(let i=1;i<=20;i++){
  if(i%2==0){
    pares[i]=i;
    console.log(i);
  }
}