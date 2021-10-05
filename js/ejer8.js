'use strict'
//Esperanza Rodríguez Martínez
//EJER 8: Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.

let mes=introducir();
comprobarcuatri(mes);

function introducir(){
  let mes =" ";
  do{
    mes = prompt('Introduce mes: ');

  }while(!isNaN(mes) || mes==" " || mes=="" );

  return mes;

}
function comprobarcuatri(mes){

  let mes2=" ";

  for(let y=0; y<=mes.length;y++){
      if (mes.charAt(y).toLowerCase()!=" ") {
        mes2=mes2+mes.charAt(y);
      }
  }
//ARREGLAR
  if( mes2 =="enero" || mes2 =="febrero" || mes2 =="marzo" || mes2 =="abril" ){
    console.log("Primer cuatrimestre." );
  }else{
    if (mes2 =="mayo" || mes2 =="junio" || mes2 =="julio" || mes2 =="agosto" ) {
      console.log("Segundo cuatrimestre." );
    }else{
      console.log("Tercer cuatrimestre." );
    }
  }
}
