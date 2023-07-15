//Digitar Numeros
var n1 = prompt("digite um numero");
var n2 = prompt("digite mais um numero");

//Coversor
n1 = parseFloat(n1);//Conversor
n2 = parseFloat(n2);//Conversor
resultado = n1 + n2;

/*Resultado
function resutado() {
    if (n1 + n2) {
        resultado = n1 + n2;
    }else {
        pontos.innerHTML = "Pontos: 0";
    }
}*/

//Mostrar Soma
console.log(resultado);
pontos.innerHTML = "Pontos: " + resultado;
//alert(n1 + n2); //Mostra a soma