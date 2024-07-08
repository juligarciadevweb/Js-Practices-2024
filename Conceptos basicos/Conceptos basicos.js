//Var, let y const

let messi = 7 //A let tambien lo podemos dejar sin asignar
var nombreDeVariable //A var la podemos dejar sin asignar
const unaCOnsta = 4 //Las constantes si o si deben ser inicializadas y no pueden ser modificadas

//Tenemos diferentes variables numericas
let num = 7 //de tipo entero
let number = 7.774 //de tipo flotante
let text = "Hola mundo soy JuliDev" //Podemos definirlas igual que en C
let cadena = `Esta es una variable con backstiks ${messi}` 
console.log(cadena); //Esta es una variable con backstiks 7

//Scope == Disponibilidad

let x = 2

{
    let x = 77
    console.log(x) //77
    //Si dentro de un ambito no esta definida una variable, las de afuera estan disponibles

}

console.log(x) //2 porque toma la variable anterior

//Uso de funciones

function sumar(n, i) {
    return n + i
}

let n = 44
let i = 99
console.log(parseInt(sumar(n, i))) 
//Uso una funcion predefinida de JS para parsear el dato de la funcion sumar a tipo entero



