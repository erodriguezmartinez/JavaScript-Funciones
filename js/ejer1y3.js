'use strict'
//Esperanza Rodríguez Martínez
//EJER 1: Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
//EJER 3: Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.

let num1=introducir();
let num2=introducir();
let num3=introducir();

let nummayor=comprobar(num1,num2,num3);
console.log("El numero mayor es: "+nummayor);

function introducir(){
  let num =0;
  do{
    num = prompt('Introduce número: ');
  }while(isNaN(num) || num==" " || num=="" || num % 1 != 0) // num % 1 != 0 validamos introducir número entero
  return num;
}

function comprobar(num1,num2,num3){

  let nummayor=0;

  if(num1>num2 && num1>num3){
        //console.log("El numero mayor es: "+num1);
          nummayor=num1;
      if(num2>num3){
          console.log("El numero menor es: "+num3);
      }else{
          console.log("El numero menor es: "+num2);
      }
    }else{
      if(num2>num1 && num2>num3){
          //console.log("El numero mayor es: "+num2);
          nummayor=num2;
          if(num1>num3){
              console.log("El numero menor es: "+num3);
          }else{
              console.log("El numero menor es: "+num1);
          }
        }else{
          //console.log("El numero mayor es: "+num3);
          nummayor=num3;
          if(num1>num2){
              console.log("El numero menor es: "+num2);
          }else{
              console.log("El numero menor es: "+num1);
          }
        }
      }
      return nummayor;
}
