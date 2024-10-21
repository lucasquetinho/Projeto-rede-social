const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
  
const tickconfig = {
    color: getCSS('--cor-secundaria'),
    family: getCSS('--font'),
    size: 17,
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config);
}


function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export { getCSS, tickconfig, criarGrafico, incluirTexto}