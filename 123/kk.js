/* for(let prop of person){
    console.log(prop)
} */
/* const a=1
const b=2

function sumar(){
    let suma=a+b 
    console.log(suma)
}
sumar()
console.log(suma)

/* funcion expresada */

/* 
const sumar1 = function(a,b){
    let suma = a+b 
    console.log(suma)
}
sumar(1,2)

/* arrow function */

/* const sumar3 = (a+b)=>{
    let suma  = a+b 
    console.log(suma)
}
sumar3(4,6)  */ 



 let number =+prompt("Giv me a number")

 function multiplicate(number){
    for( let i=1;i<=9;i++){
        document.write(`${number} x ${i} = ${number*i}<br>`)
    }
 }

 multiplicate(number)