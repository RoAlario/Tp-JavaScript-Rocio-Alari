//Ejercicio 1: PERSONA
let persona={
  nombre: "Ro",
  edad: "21",
  ciudad: "Guaymallen",
  setCiudad: function(nuevaCiudad){
    this.ciudad=nuevaCiudad;
  },
};
console.log("Nombre: ",persona.nombre,", Edad: ",persona.edad,", Ciudad Anterior de la persona:",persona.ciudad);
let newCity=prompt("Ingrese la nueva ciudad para la persona: ");
persona.setCiudad(newCity);
console.log("Nombre: ",persona.nombre,", Edad: ",persona.edad,", Ciudad nueva de la persona",persona.ciudad);

//Ejercicio 2:LIBRO
let libro={
  titulo: prompt("Ingrese el títitulo"),
  autor: prompt("Ingrese el autor"),
  añoPublic : prompt("Ingrese el año de publicación: "),
  getAntiguedad: function(añoPublic){
    if((2024-añoPublic)>10){
      return true;
    }else{
      return false;
    }
  },
};
console.log("El libro",libro.titulo," de ",libro.autor,", ¿tiene más de diez años de antiguedad?: ", libro.getAntiguedad(libro.añoPublic));

