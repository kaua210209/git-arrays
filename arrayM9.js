let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD'];
produtos.splice(2, 1);

console.log("Após remover RAM:", produtos);
produtos.splice(2, 0, 'HD');
console.log("Após adicionar HD:", produtos);
produtos.splice(1, 1, 'CPU Rápida');
console.log("Após substituir:", produtos);