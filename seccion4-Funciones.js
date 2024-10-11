//Ejercicio 1: es par? true o false 
let par = prompt("Ingrese un número para determinar si es par: ");
const esPar = (par)=>{
  if(par % 2 == 0){
    return true;
  }else{
    return false;
  }
}
console.log("El número ",par," es par:",esPar(par));

//Ejercicio 2: Convertir a celsius
let celcius = prompt("Ingrese grados celsius: ");
const convertirCelsiusAFahrenheit  = (celcius) =>{
  let fahrenheit = celcius*1.8+32
  console.log(celcius,"grados Celsius equivalen a ",fahrenheit,"grados Fahrenheit.")
}
console.log(convertirCelsiusAFahrenheit(celcius));
