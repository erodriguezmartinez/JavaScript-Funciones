'use strict'
//Esperanza Rodríguez Martínez
//EJER 6: Elaborar una función que reciba tres enteros y retorne el promedio.

let num1=introducir();
let num2=introducir();
let num3=introducir();

let promedio=calcularpromedio(num1,num2,num3);
console.log('Promedio: '+promedio);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);

  return num;
}

function calcularpromedio(num1,num2,num3){

  let promedio=(Number(num1)+Number(num2)+Number(num3))/3;   //Convertimos e contenido de num1,num2 y num3 en integer

return promedio;

}
