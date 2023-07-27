interface persona{
    name :string,
    code : string| number
    charge : number,
    description? : string
    soyHellow : ()=> string
}

let persona: persona  = {
 name : "camilo",
 code : "12",
 charge: 1,
 description:"hola",
 soyHellow:()=>{
console.log("hola")
    const personas =[1, 2, 3 ]
    personas.map((p) => p.toFixed(1))
    return "hola "
 }
}
persona.code =50;
let secodpersona : persona ={
    name: "",
    code: "",
    charge: 0,
    soyHellow :()=>{
       return  "hola "
    }
   
}
secodpersona.description?.toUpperCase()