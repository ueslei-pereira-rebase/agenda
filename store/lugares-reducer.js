import Lugar from "../modelo/Lugar";
import { ADD_LUGAR } from "./lugares-actions";

//funcao que manipula o estado
const estadoInicial = {
  lugares: []
}
//quando essa funcao é chamado , ela recebendo o esatdo incial e a action
export default  (estado = estadoInicial, action) => {
  switch( action.type){
    case ADD_LUGAR:
      const lugar = new Lugar (new Date().toString(), action.dadosLugar.nomeLugar, action.dadosLugar.nomeLugar1)
      return{
        lugares: [lugar, ...estado.lugares]
      }
    default:
      return estado
  }
  return estado
}