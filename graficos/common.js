const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
  
const tickconfig = {
    color: getCSS('--cor-secundaria'),
    family: getCSS('--font'),
    size: 17,
}

  export {getCSS, tickconfig}