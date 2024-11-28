  

  let numero1 = null;
  let numero2 = null;
  let operador = null;


  function adicionarNumero(num) {

    if (numero1 == null){
        numero1 = num;
    } else {
// Se o primeiro número foi escolhido define o segundo número
        numero2 = num;
    }

    atualizarDisplay();
}

// Função para adicionar a operação (soma, subtração, etc.)
function adicionarOperacao(op) {
    if(numero1 !== null && numero2 === null) {
        operador = op;  // Defina a operação se o primeiro número foi escolhido
    }
    atualizarDisplay();
}
function calcularResultado() {
    if (numero1 !== null && numero2 !== null && operador !== null) {
        let resultado;

        // Switch para definir a operação
        switch (operador) {
            case "+":
                resultado = numero1 + numero2;
                break; // Adicionando o break aqui
            case "-":
                resultado = numero1 - numero2;
                break; // Adicionando o break aqui
            case "*":
                resultado = numero1 * numero2;
                break; // Adicionando o break aqui
            case "/":
                // Corrigindo o erro de digitação e verificando divisão por zero
                resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: Divisão por zero";
                break;
            default:
                resultado = "Operação inválida";
                break; // Adicionando o break aqui
        }

        // Atualizando o display com o resultado
        const display = document.getElementById("display");
        display.textContent = `${numero1} ${operador} ${numero2} = ${resultado}`;
    }



    function LimparEntrada() {
        numero1 = null;
        numero2 = null;
        operador = null;
        atualizarDisplay();
    }
}

    function atualizarDisplay() {
        const display = document.getElementById("display");

        if(numero1 === null) {
            display.textContent = "Escolha os números e operação";
        } else if (numero2 === null) {
            display.textContent = `${numero1} ${operador || ""}`;
        }else {
            display.textContent = `${numero1} ${operador} ${numero2}`;
        }
    }