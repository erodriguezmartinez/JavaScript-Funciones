'use strict'
//Esperanza Rodríguez Martínez
//EJER 2: Confeccionar una función a la cual le envíe tres enteros y los muestre.

let num1=introducir();
let num2=introducir();
let num3=introducir();

mostrar(num1,num2,num3);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num % 1 != 0) // num % 1 != 0 validamos introducir número entero
  return num;
}

function mostrar(num1,num2,num3){

  console.log("Primer número introducido: "+num1);
  console.log("Segundo número introducido: "+num2);
  console.log("Tercer número introducido: "+num3);

}
