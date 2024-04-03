var button = document.querySelector("button");
//El signo ! sirve para declarar que el elemento no será null
//seguido de "as" para declarar que tipo de elemento será
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//declaracion de 
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    //añadimos "+" a las variables para que sean numeros
    console.log(add(+input1.value, +input2.value));
});
