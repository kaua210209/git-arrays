let numeros = [10, 25, 5, 30, 15, 40];
let numerosMaioresQue20 = numeros.filter(function(numero) {return numero > 20;});

console.log("Números Originais:", numeros);
console.log("Maiores que 20 (filter):", numerosMaioresQue20)