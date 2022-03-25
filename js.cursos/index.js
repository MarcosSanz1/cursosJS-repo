// Este es mi primer codigo JavaScript

// PRUEBA:
// console.log('Hello World');

// VARIABLES:
/**
 * let name = 'Marcos';
 * console.log(name);
 */

// No puedes poner de nombre de la variable las palabras clave reservadas
// let, var, if, else -> son algunas de las keyword
// Los nombres de las variables tienen que ser identificativos ej: name->Marcos
// Tampoco pueden empezar por numeros (1name), ni contener espacios se usa (-)
// Si la palabra es compuesta la llamremos así (firstName)

// CONSTANTES:
const interestRate = 0.3;
//interestRate = 1; -> Esto no lo puedes hacer, ya que es una const
console.log("Ratio: " + interestRate);

// Las constantes no se pueden modificar, es decir tiene un valor fijo
// Esto de aquí arriba lanzará un error, ya que luego de definir la const
// intenta modificar su valor

// TIPOS DE VARIABLES:
let name2 = 'Marcos2'; // String
let age = 19; // Number (No existe float, ni double. LOS NUMEROS SON NUMBER)
let isApproved = false; // Boolean

// También podemos crear variables nulas e indefinidas
let firstName = undefined; // Indefinida
let color = null; // Nula
/** Ejemplo de cuando inicializmos una variable a nula:
 * Deseamos presentar al usuario una lista de colores. Si el usuario no tiene
 * ninguna selección desea establecer la variable "color" con el color que escoja
 * el usuario en el futuro, como luego igual el usuario borra el color seleccionado
 * inicializamos la variable a null, para borrar el valor
 * */ 

// VARIABLES DINÁMICAS
// Apunte -> en el console del inspector podemos usar typeof para ver el tipo
// Al ser lenguaje dinámico podemos cambiar el tipo "cuando nos convenga"
// Al inicializar una variable a null, su type es un Objeto

// OBJETOS
let persona = {
    nombre: 'MarcosSanz',
    edad: 19
};

// Dot Notation
persona.nombre = 'Jhon';

// Bracket Notation
let selection = 'nombre'
persona[selection] = 'Mary';

// Podemos sacar el objeto o una variable del objeto
console.log(persona);
console.log("nombre de la persona: " + persona.nombre);

// ARRAYS
let selectedColors = ['rojo', 'azul']; //Array de String
// Los arrays tienen "indice", es decir "rojo" está en la posición 0 y
// azul en la 1
// También tienen longitud "lenght", en este caso tiene de lenght:2
// Podemos añadir un nuevo "color" y cambiar su tipo y valor cuando queramos, y en la posición que queramos

selectedColors[2] = 'verde';
selectedColors[2] = 1;

console.log("color en primera posición: "+ selectedColors[0]); //-> Con esto sacamos por consola 'rojo'
console.log("tamaño del array "+ selectedColors.length); // Con esto sacamos el tamaño del array

// FUNCIONES

// Performing a task
// Podemos pasarle una variable a la función y trabajar con ella
function greet(nombre1, apellido1) {
    // Aquí estará toda la lógica de nuestra aplicación
    // Esta función simplemente lanzará un saludo por consola
    console.log('Hello ' + nombre1 + ' ' + apellido1);
}

// Calculating a value
function square(lado) {
    // Esta función calculará el area de un cuadrado
    // En este caso queremos que nos devuelva el resultado, para ello usamos return
    return lado * lado;
}

greet('George', 'Smith'); // -> Ejecutamos la función con parametros

// Podemos guardar el resultado de la function en una variable
let calcular= square(2);
console.log("area del cuadrado " + calcular);
// O simplemente sacar el resultado por consola
console.log("area del cuadrado " + square(2));
// COMENTARIO 