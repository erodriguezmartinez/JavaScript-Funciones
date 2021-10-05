'use strict'
//Esperanza Rodríguez Martínez
//EJER 10: Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho valor.

let num=introducir();

let raiz=Math.sqrt(num);

console.log('La raiz cuadrada del número '+num+' es: '+raiz);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);

  return num;
}
