'use strict'
//Esperanza Rodríguez Martínez
//EJER 4: Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

let lado=introducir();

perimetro(lado);

function introducir(){
  let lado =0;
  do{
    lado = prompt('Introduce lado del cuadrado: ');
  }while(isNaN(lado) || lado==" " || lado=="" || lado<=0)
  return lado;
}

function perimetro(lado){

  let perimetro=lado*4;
  console.log('Perímetro del cuadrado: '+perimetro);

}
