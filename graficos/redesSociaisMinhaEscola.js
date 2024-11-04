console.log('https://script.google.com/macros/s/AKfycbxunPiPv-J0856ACpNo_AunH0iI9qSh4pqe0rjJ3zk7ibRvEcwM3RGCJIpgL-rX5kPshA/exec');

async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.google.com/macros/s/AKfycbxunPiPv-J0856ACpNo_AunH0iI9qSh4pqe0rjJ3zk7ibRvEcwM3RGCJIpgL-rX5kPshA/exec'
    const res = await fetch(url) 
    const dados = await res.json()
    const redesSociais = dados.slice(1).map(redes = redes[1])
    
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})
    
    console.log(dados)
}

redesSociaisFavoritasMinhaEscola()