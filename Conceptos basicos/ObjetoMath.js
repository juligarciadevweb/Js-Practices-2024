//Redondeo de un numero

const number = 2.33
console.log(Math.round(number)) //2: lo redondeara al que esta mas cerca
const numberr = 2.50
console.log(Math.round(numberr)) //3: redondea hacia arriba por 5
console.log(Math.ceil(number)); //3: Siempre redondeara hacia arriba
console.log(Math.trunc(number)); //2: truncara todos los enteros eliminando los decimales
console.log(Math.PI); // 3.141592653589793 

console.log(Math.sqrt(16)); // R: 4 devuelve la raiz cuadrada
console.log(Math.abs(-5)); // 5: Valor absoluto
console.log(Math.min(1, 2, 3, 7, 5)); // R: 1 devuelve el valor minimo de los argumentos
console.log(Math.max(1, 2, 3, 4, 5)); // R: 5 devuelve el valor maximo de los argumentos

//Random
console.log(Math.random()); //0.4569897762029551 numero aleatorio del 0 al 1
console.log(Math.random()*120); //R:18.535258295525374 Seria un numero del 0 al 120
const num = Math.random()*100
const result = Math.round(num) //Redondea el numero random
console.log(result);
