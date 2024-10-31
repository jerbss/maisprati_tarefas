const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Descomente as funções(questões) a qual deseja executar, comente as que não deseja executar

//teste
//Questao1();
//Questao2();
//Questao3();
//Questao4();
//Questao5();
//Questao6();
//Questao7();
//Questao8();
//Questao9();
//Questao10();
//Questao11();
//Questao12();
//Questao13();
//Questao14();
//Questao15();

// 1º) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// 2º) Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// 3º) Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// 4º) Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// 5º) Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// 6º) Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo.

// 7º) As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// 8º) Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// 9º) Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// 10º) Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// 11º) Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// 12º) Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// 13º) Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// 14º) Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// 15º) Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

function Questao1() {
  rl.question('Digite um número inteiro: ', (input) => {
    const numero = parseInt(input);

    if (numero % 2 === 0) {
      console.log(numero + " é par.");
    } else {
      console.log(numero + " é ímpar.");
    }

    rl.close(); // Fecha a interface após receber a entrada
  });
}

function Questao2() {
  rl.question('Digite a idade: ', (input) => {
    const idade = parseInt(input);

    if (idade <= 12) {
      console.log("Sua idade é " + idade + ", então você é criança.");
    } else if (idade >= 13 && idade <= 20) {
      console.log("Sua idade é " + idade + ", então você é adolescente.");
    } else if (idade >= 21 && idade <= 59) {
      console.log("Sua idade é " + idade + ", então você é adulto.");
    } else {
      console.log("Sua idade é " + idade + ", então você é idoso.");
    }

    rl.close();
  });
}

function Questao3() {
  rl.question('Digite uma nota de 0 a 10: ', (input) => {
    const nota = parseFloat(input);

    if (nota >= 7 && nota <= 10) {
      console.log("Aprovado");
    } else if (nota >= 5 && nota < 7) {
      console.log("Recuperação");
    } else if (nota >= 0 && nota < 5) {
      console.log("Reprovado");
    } else {
      console.log("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
    }

    rl.close();
  });
}

function Questao4() {
  rl.question('Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n', (input) => {
    const opcao = parseInt(input);

    switch (opcao) {
      case 1:
        console.log("Você escolheu a Opção 1.");
        // Lógica para a Opção 1
        break;
      case 2:
        console.log("Você escolheu a Opção 2.");
        // Lógica para a Opção 2
        break;
      case 3:
        console.log("Você escolheu a Opção 3.");
        // Lógica para a Opção 3
        break;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 3.");
    }

    rl.close();
  });
}

function Questao5() {
  rl.question('Digite seu peso em kg: ', (pesoInput) => {
    const peso = parseFloat(pesoInput);
    rl.question('Digite sua altura em metros: ', (alturaInput) => {
      const altura = parseFloat(alturaInput);

      const imc = peso / (altura * altura);
      console.log("Seu IMC é: " + imc.toFixed(2));

      if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
      } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Você está com peso normal.");
      } else if (imc >= 25 && imc < 29.9) {
        console.log("Você está com sobrepeso.");
      } else {
        console.log("Você está com obesidade.");
      }

      rl.close();
    });
  });
}

function Questao6() {
  rl.question('Digite o lado A do triângulo: ', (AInput) => {
    const A = parseFloat(AInput);
    rl.question('Digite o lado B do triângulo: ', (BInput) => {
      const B = parseFloat(BInput);
      rl.question('Digite o lado C do triângulo: ', (CInput) => {
        const C = parseFloat(CInput);

        // Verificando se os lados formam um triângulo
        if (A < B + C && B < A + C && C < A + B) {
          console.log("Os lados formam um triângulo.");

          // Verificando o tipo de triângulo
          if (A === B && B === C) {
            console.log("Tipo: Equilátero");
          } else if (A === B || A === C || B === C) {
            console.log("Tipo: Isósceles");
          } else {
            console.log("Tipo: Escaleno");
          }
        } else {
          console.log("Os lados não formam um triângulo.");
        }

        rl.close();
      });
    });
  });
}

function Questao7() {
  rl.question('Digite o número de maçãs compradas: ', (quantidadeInput) => {
    const quantidade = parseInt(quantidadeInput);
    let precoPorMaca;

    if (quantidade < 12) {
      precoPorMaca = 0.30;
    } else {
      precoPorMaca = 0.25;
    }

    const total = quantidade * precoPorMaca;
    console.log("O valor total da compra é: R$ " + total.toFixed(2));

    rl.close();
  });
}

function Questao8() {
  rl.question('Digite o primeiro valor: ', (valor1Input) => {
    const valor1 = parseFloat(valor1Input);
    rl.question('Digite o segundo valor: ', (valor2Input) => {
      const valor2 = parseFloat(valor2Input);

      if (valor1 < valor2) {
        console.log("Ordem crescente: " + valor1 + ", " + valor2);
      } else {
        console.log("Ordem crescente: " + valor2 + ", " + valor1);
      }

      rl.close();
    });
  });
}

function Questao9() {
  console.log("Contagem regressiva:");
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  rl.close();
}

function Questao10() {
  rl.question('Digite um número inteiro: ', (input) => {
    const numero = parseInt(input);

    for (let i = 0; i < 10; i++) {
      console.log(numero);
    }

    rl.close();
  });
}

function Questao11() {
  let soma = 0;
  let contador = 0;

  const lerNumero = () => {
    rl.question('Digite um número (ou "0" para sair): ', (input) => {
      const numero = parseFloat(input);
      if (numero === 0) {
        console.log("A soma total é: " + soma);
        console.log("Total de números digitados: " + contador);
        rl.close();
      } else {
        soma += numero;
        contador++;
        lerNumero(); // Chama a função novamente para ler o próximo número
      }
    });
  };

  lerNumero(); // Inicia a leitura dos números
}

function Questao12() {
  rl.question('Digite um número para a tabuada: ', (input) => {
    const numero = parseInt(input);
    console.log("Tabuada do " + numero + ":");
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + (numero * i));
    }
    rl.close();
  });
}

function Questao13() {
  let soma = 0;
  let contador = 0;

  const lerNumero = () => {
    rl.question('Digite um número decimal (ou "0" para sair): ', (input) => {
      const numero = parseFloat(input);
      if (numero === 0) {
        if (contador > 0) {
          const media = soma / contador;
          console.log("A média aritmética é: " + media);
        } else {
          console.log("Nenhum número foi digitado.");
        }
        rl.close();
      } else {
        soma += numero;
        contador++;
        lerNumero(); // Chama a função novamente para ler o próximo número
      }
    });
  };

  lerNumero(); // Inicia a leitura dos números
}

function Questao14() {
  rl.question('Digite um número inteiro para calcular o fatorial: ', (input) => {
    const numero = parseInt(input);
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }

    console.log("O fatorial de " + numero + " é: " + fatorial);
    rl.close();
  });
}

function Questao15() {
  console.log("Sequência de Fibonacci:");
  let a = 0, b = 1;

  for (let i = 0; i < 10; i++) {
    console.log(a);
    const temp = a;
    a = b;
    b = temp + b;
  }
  rl.close();
}