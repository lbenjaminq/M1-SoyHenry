//Ejercicio N° 1

x = 1;
var a = 5;
var b = 10;
//----------------------------------
    var c = function(a, b, c) {
        var x = 10;
        console.log(x); // 10
        console.log(a); // 8
        //----------
            var f = function(a, b, c) { // (8,9,10)
                b = a; 
                console.log(b); // 8
                b = c; 
                var x = 5;
     }
     //----------
    f(a,b,c);
    console.log(b); // 9
}
//-------------------------------
c(8,9,10); 
console.log(b); // 10
console.log(x); // 1



//Ejercicio N° 2

console.log(bar); // undefined
console.log(baz);//no esta declarada con var
foo(); // ejecutar la funcion foo()
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//Ejercicio N° 3
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // == "Franco"

//Ejercicio N° 4
var instructor = "Tony";
console.log(instructor); // tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // franco
   }
})();
console.log(instructor); // tony



//Ejercicio N° 5
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //"The Flash"
    console.log(pm);//"Reverse Flash";
} 
console.log(instructor); // "The Flash"
console.log(pm);// franco

/*  var instructor = "Tony";

var instructor = "The Flash";
QUEDARIAN ARRIBA DE TODO POR EL HOISTING CON VAR
    
*/



//Ejercicio N° 6
6 / "3" // 2
"2" * "3"// 6
4 + 5 + "px"// '9px'
"$" + 4 + 5// "$45"
"4" - 2// 2 
"4px" - 2 // Nan
7 / 0 // infinity
{}[0] // [0]
parseInt("09")// 9
5 && 2 // 2
2 && 5 // devuelve el segundo excepto 0
5 || 0 // devuelve el primero excepto 0
0 || 5 // devuelve el primero excepto 0
[3]+[3]-[10] // Nan
3>2>1 // false
[] == ![] // true
[] === ![] // false


//Ejercicio N° 6
function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test(); 

 /* lexical enviroment                     execution enviroment(test())
        function test(){...}               crea un lexical enviroment
        test()                             var a=undefined  
         aa                                     function foo(){}          
 */



//Ejercicio N° 6

var snack = 'Meow Mix';                                            

function getFood(food) {    
    var snack = 'Meow Mix'                           
    if (food) {                                                    
        var snack = 'Friskies';                                    
        return snack;                                               
    }
    return snack;
}

getFood(false);


//Ejercicio N° 7

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; // 'Aurelio De Rosa'
      }
   }
};

console.log(obj.prop.getFullname()); //'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test()); //Juan perez
                    


//Ejercicio N° 8

function printing() {
    console.log(1); 
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();

// 1
// 4
// 3
// 2 