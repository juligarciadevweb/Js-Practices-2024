//Objetos

//Serian como una representacion de un objeto de la vida real en codigo

let autoJuan = {
    marca : "Citroen",
    modelo : "C4 cactus",
    anio : 2017,
    dueño : "Juan Ignacio Garcia" 
}

let autoDiego = {
    marca : "Peugeot",
    modelo : "206 confort",
    anio : 2014,
    dueño : "Diego Gomez" 
}

console.log(autoDiego);
/* 
{
  marca: 'Peugeot',
  modelo: '206 confort',
  anio: 2014,
  'dueño': 'Diego Gomez'
}
*/

autoDiego.modelo = "SUV 3008"
autoDiego.anio = 2014
autoJuan.marca = "Mercedes"
console.log(autoDiego);
console.log(autoJuan);

/**
 * 
{
  marca: 'Peugeot',
  modelo: 'SUV 3008',
  anio: 2014,
  'dueño': 'Diego Gomez'
}
{
  marca: 'Mercedes',
  modelo: 'C4 cactus',
  anio: 2017,
  'dueño': 'Juan Ignacio Garcia'
}
 * 
*/


