
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, digite números válidos');
      return;
    }
  
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero';
  
    document.getElementById('resultado').innerHTML = `
      <strong>Resultados:</strong><br>
      Soma: ${soma}<br>
      Subtração: ${subtracao}<br>
      Multiplicação: ${multiplicacao}<br>
      Divisão: ${divisao}
    `;
  }
  function converter() {
    const tipo = document.getElementById('conversaoTipo').value;
    const valor = parseFloat(document.getElementById('valor').value);
    
    if (isNaN(valor)) {
      alert('Por favor, digite um número válido');
      return;
    }
  
    let resultado;
    let unidade;
  
    switch(tipo) {
      case 'tempCF':
        resultado = (valor * 9/5) + 32;
        unidade = '°F';
        break;
      case 'distMC':
        resultado = valor * 100;
        unidade = 'cm';
        break;
      case 'pesoKL':
        resultado = valor * 2.20462;
        unidade = 'lb';
        break;
    }
  
    document.getElementById('resultado').innerHTML = 
      `Resultado: ${resultado.toFixed(2)} ${unidade}`;
  }
  function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert('Por favor, digite valores válidos');
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao;
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else if (imc < 35) {
      classificacao = 'Obesidade Grau I';
    } else if (imc < 40) {
      classificacao = 'Obesidade Grau II';
    } else {
      classificacao = 'Obesidade Grau III';
    }
  
    document.getElementById('resultado').innerHTML = 
      `IMC: ${imc.toFixed(1)}<br>Classificação: ${classificacao}`;
  }

  function submitQuiz() {
    let score = 0;

    const answers = {
        q1: 'Brasília',
        q2: '1822',
        q3: 'Amazonas',
        q4: 'Deodoro da Fonseca',
        q5: 'Paraíba'
    };

    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    Object.keys(answers).forEach((key) => {
        const selectedOption = form.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === answers[key]) {
            score++;
        }
    });

    resultDiv.innerHTML = `Você acertou ${score} de ${Object.keys(answers).length} questões!`;
}


document.addEventListener("DOMContentLoaded", function () {
  let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
  let tentativa = 0;

  document.getElementById("verificar").addEventListener("click", function () {
      let palpite = parseInt(document.getElementById("palpite").value);
      let mensagem = document.getElementById("mensagem");

      if (isNaN(palpite) || palpite < 1 || palpite > 100) {
          mensagem.innerText = "Digite um número válido entre 1 e 100!";
          return;
      }

      tentativa++;

      if (palpite === numeroSecreto) {
          mensagem.innerText = `Parabéns! Você acertou em ${tentativa} tentativas!👏👏👏`;
      } else if (palpite < numeroSecreto) {
          mensagem.innerText = "Tente um número maior!";
      } else {
          mensagem.innerText = "Tente um número menor!";
      }
  });
});