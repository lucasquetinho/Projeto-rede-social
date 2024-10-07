import { getCSS, tickconfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--cor-secundaria')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Quantidade de usuários por rede (Milhões)',
            font: {
                color: getCSS('--cor-primaria'),
                family: getCSS('--font'),
                size: 25     
            }
        },
        xaxis: {
            tickfont: tickconfig,
            title: {
                text: 'Nome das Redes',
                font: {
                    color: getCSS('--cor-primaria'),
                    family: getCSS('--font'),
                    size: 20, 
                }
            }
        },
        yaxis: {
            tickfont: tickconfig,
            title: {
                text: 'Milhões de usuários ativos',
                font: {
                    color: getCSS('--cor-primaria'),
                    family: getCSS('--font'),
                    size: 20,
                }
            }
        },
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()