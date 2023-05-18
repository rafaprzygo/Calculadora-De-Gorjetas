console.log('Funcionando...')


// 25/100 = 0.25 = 1/4
// 1/4 * 25 = 25/100
// 25% (por cento) = 0.25
// 25 algo distribuindo pra 100 pessoas
// 0.25 * 100 = 25

// 125% = 1.25 = ( 1 + 0.25 ) * x
// 100% + 25%

// 25% de 350
// const result = 0.25 - 350 = -349.75 // errado
// const result = 0.25 * 350 // correto

// DOM - Document Object Model
function calcularGorjeta() {
    const bill = document.getElementById('bill').valueAsNumber;
    const serviceQuality = Number(document.getElementById('serviceQuality').value);
    const people = document.getElementById('people').valueAsNumber;
    const result = document.getElementById('result');

    const gorjeta = bill * serviceQuality / people;

    if (isNaN(gorjeta)) {
        result.innerHTML = "<b>Erro: </b> Informe valores válidos.";
    } else {
        result.innerHTML = `<b>Gorjeta Total: </b> R$${gorjeta.toFixed(2)} cada`;
    }
}

// div com ID, getElem..., .innerHTML = '...', .textContent = '...'
