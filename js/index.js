/*

OBS: Para aparecer o valor correto do calculo é necessario colocar o . (ponto) no valor da atura, exemplo:
1.79, assim  obtera o valor correto do seu devido IMC




Aguarda o codigo ser completamente carregador para garantir que todos os elementos da pagina estejam prontos
para interagirem com eles (Função JQuery)
*/
$(document).ready(function() {
    // Função para permitir apenas números
    function allowOnlyNumbers(e) {
        const key = e.which || e.keyCode; // Detecta a tecla no qual foi pressionada
        // Permite teclas: 0-9 (48-57), backspace (8), tab (9), enter (13), delete (46)
        if (!(key >= 48 && key <= 57) && key !== 8 && key !== 9 && key !== 13 && key !== 46) {
            e.preventDefault(); // Impede a inserção de Letras
        }
    }

    // Aplica a função nos campos de peso e altura
    $('#peso').on('keypress', allowOnlyNumbers);
    $('#altura').on('keypress', allowOnlyNumbers);

    // Declarando função de calculo
    $('#calcular').click(function() {
        var peso = $('#peso').val();
        var altura = $('#altura').val();


        // "IsNaN,  (is  Not a Number) verificando se é um numero ou não"
        if (isNaN(peso) || isNaN(altura) || peso.trim() === "" || altura.trim() === "" || altura <= 0) {
            alert('Por favor, insira valores válidos e numéricos para peso e altura.');
            return;
        }
        // Declarando variaveis /type
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        var imc = peso / (altura * altura);
        var status;
        if (imc < 18.5) {
            status = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            status = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            status = 'Acima do peso (Sobrepeso)';
        } else if (imc >= 30 && imc < 34.9) {
            status = 'Obesidade I';
        } else if (imc >= 35 && imc < 39) {
            status = 'Obesidade II';
        } else {
            status = 'Obesidade III';
        }
        // Colocando casa decimais no IMC com apenas 2 numero apos a virgula
        $('#resultado_imc span').eq(0).text(imc.toFixed(2));
        $('#resultado_imc span').eq(1).text(status);
    });
    //Função para limpar os dados da calculadora, seja o resultado ou os valores inseridos na tabela
    $('#limpar').click(function() {
        $('#peso').val('');
        $('#altura').val('');
        $('#resultado_imc span').eq(0).text('0');
        $('#resultado_imc span').eq(1).text('0');
    });
});
