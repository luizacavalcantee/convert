// Cotação de moedas do dia
const USD = 5.23;
const EUR = 6.19;
const GBP = 7.23;

// Obtendo os elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount para receber apenas números
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
})

// Capturando o evento de submit no formulário
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calculando o total
        let total = amount * price;
        result.textContent = `${formatCurrencyBRL(total)} Reais`;

        // Classe para mostrar o resultado
        footer.classList.add('show-result');

    } catch (error) {
        console.error(error);

        // Removendo a classe para mostrar o resultado
        footer.classList.remove('show-result');
        alert('Ocorreu um erro inesperado. Tente novamente')
    }
}

// Função para formatar o valor em moeda BRL
function formatCurrencyBRL (value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

//
