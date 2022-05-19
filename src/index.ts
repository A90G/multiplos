//Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que
//se indique como parámetro es múltiplo del segundo
let num1: number = Number(prompt("ingrese un numero entero"));
let num2: number = Number(prompt("ingrese un numero entero"));
esMultiplo (num1, num2);

if ( esMultiplo (num1, num2)){
  console.log(num1 ,"es mùltiplo de", num2);
} else {
  console.log(num1 ,"NO es mùltiplo de", num2);
}

function esMultiplo( num1: number , num2: number): boolean {
  return ((num1 % num2 )=== 0);}

//Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
//Recuerde que la operación mod permite saber si el resto de una división es cero

