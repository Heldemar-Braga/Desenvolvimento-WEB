const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoInput) => {
  rl.question("Digite sua altura em metros: ", (alturaInput) => {
    const peso = Number(pesoInput);
    const altura = Number(alturaInput);

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc >= 25) {
      console.log("Você está acima do peso.");
    } else {
      console.log("Você está abaixo do peso.");
    }

    rl.close();
  });
});