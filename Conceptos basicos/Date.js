//Forma de poner la fecha: AAAA/MMM/DD (ISO)

const fecha = new Date("2021-4-7")
console.log(fecha); //2021-04-07T03:00:00.000Z

//Podemos hacer una especificacion
console.log(fecha.getFullYear()); //R: 2021

const meses = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"
];

let res = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear()
console.log(res); //7 Abril 2021

