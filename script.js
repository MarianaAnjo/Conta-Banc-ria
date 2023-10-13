// Classes de Contas Bancárias (seu código existente)
class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
  }

  // Métodos de ContaBancaria (seu código existente)

  // ...
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, "Conta Corrente", saldo);
    this.cartaoCredito = cartaoCredito;
  }

  // Métodos de ContaCorrente (seu código existente)

  // ...
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "Conta Poupança", saldo);
  }

  // Métodos de ContaPoupanca (seu código existente)

  // ...
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "Conta Universitária", saldo);
  }

  sacar(valor) {
    if (valor > 0 && valor <= 500 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}

// Lista de contas bancárias (seu código existente)
const contas = [];

function inserirConta() {
  const agencia = document.getElementById("agencia").value;
  const numero = document.getElementById("numero").value;
  const tipo = document.getElementById("tipo").value;
  const saldo = parseFloat(document.getElementById("saldo").value);

  let conta;

  if (tipo === "Conta Corrente") {
    conta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
  } else if (tipo === "Conta Poupança") {
    conta = new ContaPoupanca(agencia, numero, saldo);
  } else if (tipo === "Conta Universitária") {
    conta = new ContaUniversitaria(agencia, numero, saldo);
  } else {
    alert("Tipo de conta inválido.");
    return;
  }

  contas.push(conta);
  alert("Conta inserida com sucesso.");
}

function deletarConta() {
  const numeroConta = prompt("Informe o número da conta que deseja deletar:");

  for (let i = 0; i < contas.length; i++) {
    if (contas[i].numero === numeroConta) {
      contas.splice(i, 1);
      alert("Conta deletada com sucesso.");
      return;
    }
  }

  alert("Conta não encontrada.");
}

function visualizarContas() {
  const listaContas = document.getElementById("listaContas");
  listaContas.innerHTML = "";

  for (const conta of contas) {
    const infoConta = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.saldo.toFixed(2)}`;
    listaContas.innerHTML += `<p>${infoConta}</p>`;
  }
}

// Configuração dos gráficos de faturamento (novo código)
const ctxFaturamentoMensal = document.getElementById('graficoFaturamentoMensal').getContext('2d');
const ctxFaturamentoAnual = document.getElementById('graficoFaturamentoAnual').getContext('2d');
const ctxFaturamentoPorCategoria = document.getElementById('graficoFaturamentoPorCategoria').getContext('2d');

// Dados de exemplo para os gráficos (substitua pelos seus dados reais)
const faturamentoMensalData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Faturamento Mensal',
      data: [10000, 12000, 15000, 11000, 13000, 14000],
      backgroundColor: 'rgba(255, 192, 203, 0.2)', // Rosa
      borderColor: 'rgba(255, 192, 203, 1)', // Rosa
      borderWidth: 1,
    },
  ],
};

const faturamentoAnualData = {
  labels: ['2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Faturamento Anual',
      data: [120000, 140000, 165000, 135000, 155000],
      backgroundColor: 'rgba(255, 192, 203, 0.2)', // Rosa
      borderColor: 'rgba(255, 192, 203, 1)', // Rosa
      borderWidth: 1,
    },
  ],
};

const faturamentoPorCategoriaData = {
  labels: ['Corrente', 'Poupança', 'Universitária', 'Outros'],
  datasets: [
    {
      label: 'Faturamento por Categoria',
      data: [25000, 15000, 12000, 8000, 7500],
      backgroundColor: ['rgba(255, 192, 203, 0.2)', 'rgba(255, 192, 203, 0.2)', 'rgba(255, 192, 203, 0.2)', 'rgba(255, 192, 203, 0.2)', 'rgba(255, 192, 203, 0.2)'], // Rosa
      borderColor: ['rgba(255, 192, 203, 1)', 'rgba(255, 192, 203, 1)', 'rgba(255, 192, 203, 1)', 'rgba(255, 192, 203, 1)', 'rgba(255, 192, 203, 1)'], // Rosa
      borderWidth: 1,
    },
  ],
};
