//Tipo de variable especial que puede almacenar mas de un dato
const arr = [
    "Curso html", "Curso CSS", "Curso JS"
]

const array = new Array(5)

array[0] = "Julidev"
array[1] = "Mariano"
array[2] = "Gustavo"
array[3] = "Ariadna" 
console.log(array) //[ 'Julidev', 'Mariano', 'Gustavo', 'Ariadna', <1 empty item> ]
//Nos sale asi porque falta un elemento, hay un elemento desconocido
array[4] = "Luciana"
console.log(array) //[ 'Julidev', 'Mariano', 'Gustavo', 'Ariadna', 'Luciana' ]
//Prueba con indice 
const wwe = ["Can", "Darren", "Chris"]
wwe[9] = "Rachel"
console.log(wwe); //[ 'Can', 'Darren', 'Chris', <6 empty items>, 'Rachel' ] hay 6 items desconocidos

    //Ordenamiento de arrays 
const number = [1,3,77,88,-5,-9]
console.log(number.sort()) //[ -5, -9, 1, 3, 77, 88 ] los ordena de forma ascendente
const letters = ["Edge", "Jhon Cena", "Seth Rollins", "Aj", "Triple H", "Stone Cold"]
console.log(letters.sort()) //[ 'Aj', 'Edge', 'Jhon Cena', 'Seth Rollins', 'Stone Cold', 'Triple H' ]

    //Length
console.log(number.length) //6, el length siempre va sin ()
number[number.length] = "Los silvadores"
console.log(number); //[ -5, -9, 1, 3, 77, 88, 'Los silvadores' ]
    //tambien sirve para agregar desde el final

    //Filter
let cuentame = ["Arquitectura", "Analisis", "Fisica", "Laboratorio 3", "Laboratorio 3", "Ingles"]
console.log(cuentame.filter(x => x == 'Laboratorio 3')) //[ 'Laboratorio 3', 'Laboratorio 3' ]
//Siempre debes usar el == para realizar la comparacion sino es asignacion, muestra las repeticiones

const personas = [
    { nombre: "Juan", apellido: "Pérez" },
    { nombre: "Juan", apellido: "Garcia" },
    { nombre: "María", apellido: "López" },
    { nombre: "Carlos", apellido: "Garcia" },
    { nombre: "Ana", apellido: "Fernández" },
    { nombre: "Juan", apellido: "Garcia" },
    { nombre: "Carmen", apellido: "Sánchez" }
]
console.log(personas.filter(x => x.apellido == 'Garcia'))
/*[
  { nombre: 'Juan', apellido: 'Garcia' },
  { nombre: 'Carlos', apellido: 'Garcia' },
  { nombre: 'Juan', apellido: 'Garcia' }
]*/

console.log(personas.filter(x => x.apellido == 'Garcia' && x.nombre == 'Juan')) //Utilizamos el callback
/*[
  { nombre: 'Juan', apellido: 'Garcia' },
  { nombre: 'Juan', apellido: 'Garcia' }
]*/

for (let index = 0; index < personas.length; index++) {
    const element = personas[index];
    console.log(element.nombre);   //Recorre uno a uno
}
/*
 * Juan
María
Carlos
Ana
Juan
Carmen
*/

    //Map
//Mapea el array y hace un reemplazo en ciertos elementos especificados en el
const frutas = ["Manzana", "Naranja", "Tomate", "Tomate"]
const res = frutas.map(x => {
    if (x == "Tomate") return "WWE"
})
console.log(res); //[ undefined, undefined, 'WWE', 'WWE' ]

const frut = ["Tomate", "Tomate", "Tomate", "Tomate"]
const resi = frutas.map(x => {
    if (x == "Tomate") return "WWE"
})
console.log(resi);

    //Fill
/*El método fill cambia todos los elementos de un array a un valor estático, 
desde un índice inicial hasta un índice final. Aquí hay un ejemplo:*/

let fi = [1, 2, 3, 4, 5];
// Llenamos todos los elementos del array con el valor 0
fi.fill(0);
console.log(fi); //[ 0, 0, 0, 0, 0 ]
fi = [1, 2, 3, 4, 5];// Podemos llenar solo una parte del array especificando índices
fi.fill(0, 2, 4); // Llena desde el índice 2 hasta el 3 (sin incluir el índice 4)
console.log(fi); //[ 1, 2, 0, 0, 5 ]

    //Every
const close = ["Marcelo", "Marcelo", "Marcelo","Marcelo"]
console.log(close.every(x => "Marcelo")); //true
//compara que cada elemento sea el mismo que el del argumento del callback

    //POP
const prueba = ["Glee", "Swat", "Disney"]
console.log(prueba.pop()); //Le arranca el ultimo elemento R: Disney
console.log(prueba);//[ 'Glee', 'Swat' ]
    
    //Shift
const pruebaa = ["No llores por mi Argentina", "No te apartes de mi", "Carta a un joven poeta"]
console.log(pruebaa.shift()); //Le arranca el primer elemento R: No llores por mi Argentina
console.log(pruebaa);

    //Splice

// Array inicial
let fruts = ["manzana", "banana", "cereza", "durazno"];

// Añadir "mango" y "piña" en la posición 2
fruts.splice(2, 0, "mango", "piña");
console.log(fruts); // ["manzana", "banana", "mango", "piña", "cereza", "durazno"]

// Eliminar 2 elementos a partir de la posición 3
let eliminadas = fruts.splice(3, 2);
console.log(fruts); // ["manzana", "banana", "mango", "durazno"]
console.log(eliminadas); // ["piña", "cereza"]

// Reemplazar el elemento en la posición 1 con "fresa"
frutas.splice(1, 1, "fresa");
console.log(fruts); // ["manzana", "fresa", "mango", "durazno"]




