// ENUNCIADOS AO FINAL DO ARQUIVO

//Questão 1
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "preto"
  };
  
  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }
console.log();
//Questão 2
console.log();
const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
}

let editoraExistente = false;

for (let propriedade in livro){
    if (propriedade == "editora"){
        editoraExistente == true;
        break;
    }
}

if (!editoraExistente){
    livro.editora = "Editora X";
}

console.log(livro);

//Questão 3
console.log();
const produto = {
    nome: "Smartphone",
    preco: 1200,
    estoque: 50,
    classificacao: 4.5,
    peso: 0.2 //Kg
  };

  function filtrarPropriedades(objeto, valorLimite) {
    const resultado = {};
  
    for (let propriedade in objeto) {
      if (objeto[propriedade] > valorLimite) {
        resultado[propriedade] = objeto[propriedade];
      }
    }
  
    return resultado;
  }
  
  const produtoFiltrado = filtrarPropriedades(produto, 40); //No segundo parâmetro é o valor limite mínimo
  console.log(produtoFiltrado);

//Questão 4
console.log();
const pessoas = [
    { nome: "João", idade: 28, cidade: "Fortaleza" },
    { nome: "Maria", idade: 34, cidade: "São Paulo" },
    { nome: "Pedro", idade: 22, cidade: "Rio de Janeiro" },
    { nome: "Ana", idade: 30, cidade: "Belo Horizonte" }
  ];
  
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }
  
//Questão 5
console.log();
const alunos = [
    { nome: "Carlos", nota1: 8.5, nota2: 7.0 },
    { nome: "Mariana", nota1: 9.0, nota2: 8.5 },
    { nome: "Felipe", nota1: 6.0, nota2: 5.5 },
    { nome: "Ana", nota1: 10.0, nota2: 9.0 }
  ];
  
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
  }

//Questão 6
console.log();
const funcionarios = [
    { nome: "João", cargo: "Desenvolvedor", salario: 5000 },
    { nome: "Maria", cargo: "Designer", salario: 3000 },
    { nome: "Carlos", cargo: "Gerente", salario: 7000 },
    { nome: "Ana", cargo: "Analista", salario: 4000 },
    { nome: "Lucas", cargo: "Estagiário", salario: 1500 }
  ];
  
  const salarioMinimo = 3500;
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
  }

//Questão 7
console.log();
const produtos = [
    { nome: "Produto A", preco: 100, desconto: 0.1 },
    { nome: "Produto B", preco: 200, desconto: 0.1 },
    { nome: "Produto C", preco: 150, desconto: 0.1 },
    { nome: "Produto D", preco: 300, desconto: 0.1 }
  ];
  
  produtos.forEach(produto => {
    const precoComDesconto = produto.preco - (produto.preco * produto.desconto);
    console.log(`Nome: ${produto.nome}, Preço original: R$${produto.preco.toFixed(2)}, Preço com desconto: R$${precoComDesconto.toFixed(2)}`);
  });
  
//Questão 8
console.log();
const filmes = [
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Matrix", diretor: "Lana Wachowski, Lilly Wachowski", anoLancamento: 1999 },
    { titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 }
  ];
  
  const titulos = [];
  
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  console.log(titulos);
  
//Questão 9
console.log();
const clientes = [
    { nome: "Alice", idade: 28, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 32, cidade: "Belo Horizonte" },
    { nome: "David", idade: 29, cidade: "Curitiba" }
  ];
  
  let contagemAcima30 = 0;
  
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contagemAcima30++;
    }
  });
  
  console.log(`Total de clientes com mais de 30 anos: ${contagemAcima30}`);  

//Questão 10
console.log();
const vendas = [
    { produto: "Produto A", quantidade: 10, valor: 15.5 },
    { produto: "Produto B", quantidade: 5, valor: 20.0 },
    { produto: "Produto C", quantidade: 2, valor: 30.0 }
  ];
  
  let valorTotal = 0;
  
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total de vendas: R$ ${valorTotal.toFixed(2)}`);  

//Questão 11
console.log();
const pedidos = [
    { cliente: "Alice", produto: "Produto A", quantidade: 2 },
    { cliente: "Bob", produto: "Produto B", quantidade: 1 },
    { cliente: "Alice", produto: "Produto C", quantidade: 3 },
    { cliente: "Bob", produto: "Produto A", quantidade: 1 }
  ];
  
  const agrupamento = {};
  
  pedidos.forEach(pedido => {
    if (!agrupamento[pedido.cliente]) {
      agrupamento[pedido.cliente] = 0;
    }
    agrupamento[pedido.cliente] += pedido.quantidade;
  });
  
  console.log("Quantidade total de produtos por cliente:", agrupamento);
  
//Questão 12
console.log();
const estoque = [
    { produto: "Produto A", quantidade: 5, minimo: 10 },
    { produto: "Produto B", quantidade: 8, minimo: 10 },
    { produto: "Produto C", quantidade: 15, minimo: 10 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log("Estoque atualizado:", estoque);
  
//Questão 13
console.log();
const carrinho = {
    itens: [
      { nome: "Produto A", quantidade: 2, precoUnitario: 15.0 },
      { nome: "Produto B", quantidade: 1, precoUnitario: 20.0 },
      { nome: "Produto C", quantidade: 3, precoUnitario: 10.0 }
    ]
  };
  
  let valorTotalCarrinho = 0;
  
  carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho.toFixed(2)}`);
  
//Questão 14
console.log();
const empresa = {
    departamentos: [
      {
        nome: "Vendas",
        funcionarios: ["Alice", "Bob"]
      },
      {
        nome: "TI",
        funcionarios: ["Carol", "David"]
      }
    ]
  };
  
  for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario of departamento.funcionarios) {
      console.log(` - Funcionário: ${funcionario}`);
    }
  }
  
//Questão 15
console.log();
const transacoes = [
    { tipo: "entrada", valor: 100 },
    { tipo: "saida", valor: 50 },
    { tipo: "entrada", valor: 200 },
    { tipo: "saida", valor: 80 }
  ];
  
  let saldoFinal = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
      saldoFinal += transacao.valor;
    } else {
      saldoFinal -= transacao.valor;
    }
  });
  
  console.log(`Saldo final: R$ ${saldoFinal}`);

// ~~~ QUESTÕES ~~~

// Manipulação de Objetos

// 1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. 
// Use for in para iterar sobre as propriedades e exibir seus valores no console.

// 2. Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. 
// Verifique se a propriedade editora existe no objeto usando for in. 
// Se não existir, adicione essa propriedade ao objeto.

// 3. Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, 
// crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. 
// Use for in para filtrar as propriedades.

// Manipulação de Arrays de Objetos com for of

// 4. Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. 
// Use for of para exibir as informações de cada pessoa no console.

// 5. Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. 
// Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

// 6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. 
// Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

// Manipulação de Arrays de Objetos com forEach

// 7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. 
// Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

// 8. Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. 
// Use forEach para criar um novo array contendo apenas os títulos dos filmes.

// 9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. 
// Use forEach para contar quantos clientes têm mais de 30 anos.

// Combinação de Estruturas

// 10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. 
// Use forEach para calcular o valor total de vendas de todos os produtos.

// 11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. 
// Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. 
// Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// 13. Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. 
// Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. 
// Use forEach para calcular o valor total do carrinho.

// 14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. 
// Cada departamento tem um nome e uma lista de funcionarios. 
// Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

// 15. Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. 
// Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.