'use strict'
//Esperanza Rodríguez Martínez
//EJER 7: Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

let suma=introducir();
console.log('Suma total de los 5 números introducidos: '+suma);

function introducir(){
  let num =0;
  let cont=0;
  let suma=0;
  do{
    num = prompt('Introduce número: ');
    cont++;
    suma+=Number(num);

  }while(isNaN(num) || num==" " || num=="" || num<=0 || cont<5);

  return suma;

}
