// Função para filtrar números pares
function filterEvens(arr) {
    // Usando o método filter para criar um novo array com apenas números pares
    return arr.filter(function(num) {
        return num % 2 === 0; // Verifica se o número é par
    });
}

// Exemplo de uso da função
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pares = filterEvens(numeros);

console.log(pares); // Saída: [2, 4, 6, 8, 10]