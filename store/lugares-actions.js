export const ADD_LUGAR = 'ADD_LUGAR'
//funcao criadora de ação
//devolve uma ação que é um objeto json
export const addLugar = (nomeLugar, nomeLugar1) => {
    return {
        type: ADD_LUGAR,
        dadosLugar: {
            nomeLugar: nomeLugar,
            nomeLugar1: nomeLugar1,
            // imagem: imagem
        }
    }
}