/*variables
let --> en un bloque de codigo, solo pertence a ese bloque de codigo
var --> le pertenece a toda la aplicacion, se puede acceder desde cualquier parte de la app
const --> no se puede cambiar el valor que tiene dentro*/


/*valores:

let condition 
boolean = true/false
string="cadena"
number=0
null --> espacio en memoria que no se ha asignado
undefined --> espacio de memoria que se esta reservando

let variableUndefined; --> deja hacerlo

const constUndefined --> no deja hacerlo
*/

//PUNTO 1

const parrafo=document.getElementById("parrafosAzul");
const button1=document.getElementById("buttonCambioCol")
const cambiarColor = ()=>{
  if(parrafo.classList.contains("parrafoGris")){
    parrafo.classList.remove("parrafoGris");
  }else{
    parrafo.classList.add("parrafoGris");
  }
}
button1.addEventListener("click", ()=>{
  cambiarColor();
})

//PUNTO 2
const button2=document.getElementById("buttonRecibe");
const obtenerInfo = ()=>{
  const texto=document.getElementById("textoIngresado").value;
  alert("El texto que ingresó es: "+texto);
}
button2.addEventListener("click", ()=>{
  obtenerInfo();
})

//EVENTOS EN DOM

//PUNTO 1
const elem1 = document.getElementById("e1");
elem1.addEventListener("click",()=>{
  console.log(document.getElementById("e1").textContent);
})

const elem2 = document.getElementById("e2");
elem2.addEventListener("click",()=>{
  console.log(document.getElementById("e2").textContent);
})

const elem3 = document.getElementById("e3");
elem3.addEventListener("click",()=>{
  console.log(document.getElementById("e3").textContent);
})

const elem4 = document.getElementById("e4");
elem4.addEventListener("click",()=>{
  console.log(document.getElementById("e4").textContent);
})

//PUNTO 2
const desButton = document.getElementById("desButton");
const habButton = document.getElementById("habButton");
const input = document.getElementById("input");

const inhabButton = ()=>{
  document.getElementById("input").disabled=true;
}

const habilitarButton = () =>{
  document.getElementById("input").disabled=false;
}

desButton.addEventListener("click", ()=>{
  inhabButton();
})

habButton.addEventListener("click",()=>{
  habilitarButton();
})

//LOCAL STORAGE

//PUNTO 1
const buttonElim=document.getElementById("buttonElim");
const buttonGuard=document.getElementById("buttonGuard");
const mail=document.getElementById("mail");

buttonGuard.addEventListener("click",()=>{
  guardarMail();
  const result = localStorage.getItem("datosMail")
  if(result){
    const correoGuardado = document.getElementById("CorreoGuardado");
    const parsedResult = JSON.parse(result);
    correoGuardado.innerHTML=`<p>Correo guardado: ${parsedResult.mail}</p>`;
  }else{
    console.log("Los datos no existen.")
  }
});

buttonElim.addEventListener("click",()=>{
  eliminarMail();
});

const eliminarMail=()=>{       
  const mail=document.getElementById("mail").value;
  localStorage.removeItem("datosMail", JSON.stringify({mail}));
}

const guardarMail=()=>{       
  const mail=document.getElementById("mail").value;
  localStorage.setItem("datosMail", JSON.stringify({mail}));
}

