const valorConta = 220;
const percentualGorjeta = 5;

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotal = valorConta + valorGorjeta;

console.log(`Valor da Conta (Consumo): R$${valorConta.toFixed(2)}, ` +
    `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
    `Total a pagar: R$${valorTotal.toFixed(2)}`
);