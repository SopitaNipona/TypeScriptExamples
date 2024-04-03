const button = document.querySelector("button");
//El signo ! sirve para declarar que el elemento no será null
//seguido de "as" para declarar que tipo de elemento será
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

//declaracion de 
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function(){
//añadimos "+" a las variables para que sean numeros y no se puede reasignar
  console.log(add(+input1.value, +input2.value));
})

//Escribimos tsc greeter.ts para generar el codigo de JS