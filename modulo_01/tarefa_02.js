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