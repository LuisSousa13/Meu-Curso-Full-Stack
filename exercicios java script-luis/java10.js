// Declaração e atribuição de valor à variável
var num = 5; 
var fatorial = 1; 
var i = num; // Inicialização da variável de controle com o valor de num
while (i > 1) {
    fatorial *= i; // Multiplica fatorial pelo valor atual de i
    i--; // Decrementa i
}

// Impressão do resultado
console.log("O fatorial de " + num + " é: " + fatorial);