let age:string = "camilo"
let age1:number = 21 
let age2  = true 
let age3:object ={} 
let age4: object[]  = [ {},{name: "camilo "}]

let responsive : any = "hola ";
responsive = 20;
responsive = true;
responsive = ["hola", 23];

function saludar() :void { // void no retorna nada si ejecuta 

}

let responsive2: unknown;
responsive2 = true
if (responsive2 ){

}
let responsive3 = null
let responsive4 = undefined


// combinacion de tipos 

type responsive6 = number | undefined ;

let responsive7 : responsive6
let responsiveProductos : responsive6
let responsivepartenes : responsive6
responsiveProductos?.toString().concat("");

 // type assertion 
 let mensaje : any = ""
 let mensajeuppercase = <string> mensaje ;
 mensajeuppercase.toUpperCase ();
 
 const canvas  = <HTMLCanvasElement> document.getElementById ("canvas")
 const canvas1  = document.getElementById ("canvas") as HTMLCanvasElement;
