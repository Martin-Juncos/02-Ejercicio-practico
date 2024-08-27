// Ejercicio 1: Variables y Tipos de Datos
let nombre = "Juan"; // Asigna tu nombre
let edad = 25; // Asigna tu edad
let esEstudiante = true; // Asigna true si eres estudiante

// Ejercicio 2: Operadores y Sentencias Condicionales
edad = 20;

if (edad >= 18) {
  // Verifica si la edad es mayor o igual a 18
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ejercicio 3: Bucles e Iteraciones
for (let i = 1; i <= 5; i++) {
  // Bucle para imprimir números del 1 al 5
  console.log(i);
}

// Ejercicio 4: Funciones
const sumar = (a, b) => a + b; // Función de flecha que suma dos números

// Ejercicio 5: Arrays
console.log(frutas[2]); // Accede al tercer elemento del array "frutas" (naranja)

// Ejercicio 6: Métodos de Arrays
let numerosPares = numeros.filter((num) => num % 2 === 0); // Filtra los números pares

// Ejercicio 7: Objetos
let persona = {
  nombre: "Juan",
  edad: 25,
  saludar() {
    // Método saludar que devuelve un saludo con el nombre
    return `Hola, mi nombre es ${this.nombre}`;
  },
};

// Ejercicio 8: Destructuring
let { nombre } = persona; // Destructuring para extraer "nombre" del objeto
console.log(nombre); // Muestra "Ana"

// Ejercicio 9: Promesas y Async/Await
async function obtenerDatos() {
  let promesa = new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });

  let resultado = await promesa; // Espera a que la promesa se resuelva
  console.log(resultado); // Muestra "Datos obtenidos"
}

obtenerDatos();

// Ejercicio 10: Fetch API
async function fetchData() {
  let response = await fetch("https://api.example.com/datos");
  let data = await response.json(); // Convierte la respuesta en JSON
  console.log(data); // Muestra los datos obtenidos
}

fetchData();
