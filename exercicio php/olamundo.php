
#1Crie uma variável chamada $nome e atribua a ela seu nome. Em seguida, imprima uma mensagem no formato "Olá, [seu nome]!".

<?php
$nome = "Seu Nome"; // Substitua "Seu Nome" pelo seu nome real
echo "Olá, $nome!";
?>

# 2 Declare duas variáveis $a e $b, atribua a elas números inteiros. Calcule e imprima a soma, subtração, multiplicação e divisão. Verificação de Par ou Ímpar

<?php
$a = 5;
$b = 10;

echo "Soma: ". ($a + $b). "\n";

# 3 - Crie uma variável $numero e atribua a ela um valor inteiro. Use if-else para verificar se o número é par ou ímpar e imprima uma mensagem correspondente.

$numero = 10;

if ($numero % 2 == 0) {
    echo "$numero é par.\n";
} else {
    echo "$numero é ímpar.\n";
}
