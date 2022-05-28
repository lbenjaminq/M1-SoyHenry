"use strict";

const { remove } = require("@11ty/eleventy/src/TemplateCache");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.length=0
  this.head=null
}

function Node(data,next) {
  this.value= data  // va con value no con data
  this.next= null
}
// class Node {
//   constructor(value, next) {
//     this.value = value;
//     this.next = next;  
//   }
// }

// let nodo1= new Node('Mar')
// console.log(nodo1.next)


LinkedList.prototype.add = function(value){
  var node = new Node(value)
  let current=this.head
  if(current===null){
    this.head=node
   
    return node
  }
  while(current.next){  // head ----> Data: nodo1  Next ----> Data:nodo2  Next ---->
    current=current.next  
    }
    current.next = node
   
    return node
  
}

// remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
LinkedList.prototype.remove= function(){
  var current=this.head
  
  
  if(!current){
    return null
  }
  else if(current.next===null){
    var aux2=current.value
    this.head=null
    return aux2
  }

                //               current                             current                        current
  while(current.next.next){  // head ----> Data: nodo1  Next ----> Data:nodo2  Next ----> Data:nodo2  Next ---->null
   current=current.next
  }
  var aux= current.next.value
  current.next=null
  
  return aux

}
// - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
// Ejemplo: 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.
LinkedList.prototype.search= function(dato){ //head ----> Data: nodo1  Next ----> Data:nodo2  Next ----> Data:nodo2  Next ---->null
  let current = this.head
  while(current){
    if(current.value===dato){
      return current.value
    }
    if(typeof dato === "function"){
        if(dato(current.value)){
          return current.value
        } 
      }
    
    current=current.next
  }

  return null

};
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

// numero de buckets= 35
class HashTable{
    constructor(){
      this.numBuckets= 35
      this.arreglo= []
    }

    hash(x){
      var sumador= 0
      for(let i=0 ; i < x.length ; i++){
        sumador += x.charCodeAt(i) 
      }
      return sumador % 35
    }
    // - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
    set(key,value){
      if(typeof key !== "string") throw new TypeError('Keys must be strings')
      let hasheado= this.hash(key)
      
       if(!this.arreglo[hasheado]){
         this.arreglo[hasheado]={}
       }
       this.arreglo[hasheado][key] = value
    }
    
    
    // - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
    // - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
    get(key){
      
      let hasheado= this.hash(key)
      return this.arreglo[hasheado][key]
    }
    hasKey(key){
      let hasheado = this.hash(key)
      if(this.arreglo[hasheado].hasOwnProperty(key)){
        return true
      }
       return false
}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
