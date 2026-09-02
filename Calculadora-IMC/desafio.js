const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoInput) => {
  rl.question("Digite sua altura em metros: ", (alturaInput) => {
    const peso = Number(pesoInput);
    const altura = Number(alturaInput);

    if (!Number.isFinite(peso) || !Number.isFinite(altura)) {
      console.log("Digite apenas números válidos.");
      rl.close();
      return;
    }

    if (peso <= 0 || altura <= 0) {
      console.log("O peso e a altura devem ser maiores que zero.");
      rl.close();
      return;
    }

    const imc = peso / (altura * altura);

    console.log("\n----------------------------");
    console.log(`Peso: ${peso.toFixed(2)} kg`);
    console.log(`Altura: ${altura.toFixed(2)} m`);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log("----------------------------");

    if (imc < 18.5) {
      console.log("Classificação: Abaixo do peso.");
    } else if (imc < 25) {
      console.log("Classificação: Peso normal.");
    } else if (imc < 30) {
      console.log("Classificação: Sobrepeso.");
    } else if (imc < 35) {
      console.log("Classificação: Obesidade grau I.");
    } else if (imc < 40) {
      console.log("Classificação: Obesidade grau II.");
    } else {
      console.log("Classificação: Obesidade grau III.");
    }

    rl.close();
  });
});