//Agrega a la pantalla el valor del boton de la calculadora que toquemos 
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

//funcion de borrado
function borrar(){
    document.getElementById('pantalla').value = '' //lo igualamos a vacio
}

//funcion de calculo
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value //toma el valor de la pantalla
    const resultado = eval(valorPantalla) //evalua el string y lo trabaja como codigo js matematicamente
    document.getElementById('pantalla').value = resultado //nos escribira el resultado del calculo
}
