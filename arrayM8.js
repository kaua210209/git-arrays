let produtos = ['Placa Mãe', 'Processador', 'Memória RAM', 'SSD', 'Placa de Vídeo'];
let core = produtos.slice(1, 4);
let video = produtos.slice(4);

console.log("Core (slice):", core);
console.log("Vídeo (slice):", video);
console.log("Array Original (não mudou):", produtos)