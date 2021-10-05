'use strict'
//Esperanza Rodríguez Martínez
//EJER 5: Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.

let num=introducir();

let digitos=calculardigitos(num);
console.log('Cantidad de dígitos de número introducido: '+digitos);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);

  return num;
}

function calculardigitos(num) {
  let digitos=num.toString().length;
  return digitos;
}
