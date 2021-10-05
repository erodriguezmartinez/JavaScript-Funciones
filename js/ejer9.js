'use strict'
//Esperanza Rodríguez Martínez
//EJER 9: Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.

let num=introducir();

let elevado=Math.pow(num, 3);

console.log('El número '+num+' elevado a la tercera potencia es: '+elevado);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);

  return num;
}
