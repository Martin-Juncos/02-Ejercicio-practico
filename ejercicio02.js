// Ejercicio 1: Variables y Tipos de Datos
// Tarea: Completa el código para que asigne correctamente los valores a las variables.
// Tip: Utiliza let o const en lugar de var.

let nombre;  // Asigna tu nombre
let edad;    // Asigna tu edad
let esEstudiante;  // Asigna true si eres estudiante, de lo contrario false

// Ejercicio 2: Operadores y Sentencias Condicionales
// Tarea: Completa el código para verificar si la edad es mayor o igual a 18.
// Tip: Usa un condicional if/else.

let edad = 20;

if (/* tu código aquí */) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ejercicio 3: Bucles e Iteraciones
// Tarea: Usa un bucle for para imprimir los números del 1 al 5 en la consola.

for (/* tu código aquí */) {
  console.log(i);
}

// Ejercicio 4: Funciones
// Tarea: Define una función que reciba dos números y devuelva su suma.
// Tip: Usa una función de flecha.

const sumar = (a, b) => {
  // tu código aquí
};

// Ejercicio 5: Arrays
// Tarea: Completa el código para acceder al tercer elemento del array y mostrarlo en la consola.

let frutas = ["manzana", "banana", "naranja"];
console.log(/* tu código aquí */);

// Ejercicio 6: Métodos de Arrays
// Tarea: Usa el método filter para obtener solo los números pares del array.

let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(/* tu código aquí */);

// Ejercicio 7: Objetos
// Tarea: Completa el objeto "persona" añadiendo una propiedad "saludar" que sea una función que devuelva "Hola, mi nombre es [nombre]".

let persona = {
  nombre: "Juan",
  edad: 25,
  // tu código aquí
};

// Ejercicio 8: Destructuring
// Tarea: Usa destructuring para extraer el valor de "nombre" del objeto "persona".

let persona = {
  nombre: "Ana",
  edad: 30,
};

let { /* tu código aquí */ } = persona;
console.log(nombre);  // Debe mostrar "Ana"

// Ejercicio 9: Promesas y Async/Await
// Tarea: Completa la función async para que espere la resolución de la promesa y luego imprima el resultado.

async function obtenerDatos() {
  let promesa = new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });
  
  let resultado = await /* tu código aquí */;
  console.log(resultado);
}

obtenerDatos();

// Ejercicio 10: Fetch API
// Tarea: Completa la función para obtener datos desde una API utilizando fetch y async/await.

async function fetchData() {
  let response = await fetch("https://api.example.com/datos");
  let data = await /* tu código aquí */;
  console.log(data);
}

fetchData();
