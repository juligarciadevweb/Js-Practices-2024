                            //Strings
 
let string = 'Mi compañera \'Rindio el examen de algoritmos\''
console.log(string) //Mi compañera 'Rindio el examen de algoritmos'

let saltar = 'La reunion se fue \n a la bosta' //hago un salto de linea
console.log(saltar); 
/* La reunion se fue 
 a la bosta
*/

//uso de tabulado
let tabulado = 'La reunion se fue\va la bosta'
console.log(tabulado);
/*La reunion se fue
                 a la bosta*/

//Uso de lenght
let contaLetras = 'JuliDev'
console.log(contaLetras.length); //7 seria la longitud del string en letras

//Metodo slice
let cortame = 'Ella me quiere como no me quiero yo'
console.log(cortame.slice(1,4));  //R: lla - Corta el string en base a ciertos parametros en un intervalo      
console.log(cortame.slice(-7,-3)) //R: iero - Al usar numeros negativos contara de adelante hacia atras

//Metodo replace
let arg = 'Argentina necesita mejorar economicamente'
console.log(arg.replace('Argentina', 'España')); //España necesita mejorar economicamente

//Metodos de mayusculas, minusculas, concat y trim
let cuentame = 'Vamos a dar la vuelta al mundo'
console.log(cuentame.toLocaleLowerCase()); //R: vamos a dar la vuelta al mundo
console.log(cuentame.toUpperCase()) //R: VAMOS A DAR LA VUELTA AL MUNDO
console.log(cuentame.concat(arg, cortame)) //R: Vamos a dar la vuelta al mundoArgentina necesita mejorar economicamenteElla me quiere como no me quiero yo
//lo que hace ahi es concatenar cuentame con las otras 2 cadenas

let trimeo = '              Joder como la extraño' //El metodo trim sirve para quitar los espacios en blanco anteriores
console.log(trimeo.trim().concat(arg, cuentame)); //R: Joder como la extrañoArgentina necesita mejorar economicamenteVamos a dar la vuelta al mundo


