'use strict'


/*Convertir de binario a decimal el siguiente valor 1101 1001.

Solución-2. El proceso se comienza a complicar cuando tenemos números 
binarios de una longitud mayor a 8. Esto es debido a que ahora tenemos que
 verificar la posición de cada uno de los 8 bits. El proceso seria:

1×2^7 + 1×2^6 + 0x2^5 + 1×2^4 + 1×2^3 +0x2^2 + 0x2^1 + 1×2^0 = 128 + 64 + 0 + 16 + 8 + 0 + 0 + 1 = 217
*/

function BinarioADecimal(num) {
  // tu codigo aca
  let suma= 0
  

  for(let i = 0 ; i < num.length ; i++){
      suma = suma + num[i] * Math.pow(2,num.length - 1 -i)
  }
  return suma
}




function DecimalABinario(num) { 
  // tu codigo aca  18% 2 = 0   18/2 = 9 ;  9 % 2 = 1   9/2= 4 ;   4 % 2 = 0  4/2= 2 ; 2 % 2 = 0    2/2 = 0 ;  2%1 1
  
  let array= []

  while(num > 0){
    array.push(num % 2)
    num= parseInt(num /2)
  }

  return array.reverse().join('')

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}