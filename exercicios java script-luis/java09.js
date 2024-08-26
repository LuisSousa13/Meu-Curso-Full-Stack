var num = 29; // Você pode alterar este valor para testar com diferentes números

// Função para verificar se um número é primo
function ehPrimo(n) {
    if (n <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }
    for (var i = 2; i <= Math.sqrt(n); i++) { // Verifica até a raiz quadrada de n
        if (n % i === 0) {
            return false; // Se n for divisível por qualquer número entre 2 e a raiz quadrada de n, não é primo
        }
    }
    return true; // Se não encontrar nenhum divisor, é primo
}

// Verificação e impressão do resultado
if (ehPrimo(num)) {
    console.log(num + " é primo");
} else {
    console.log(num + " não é primo");
}