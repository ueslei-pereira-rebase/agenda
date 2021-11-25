import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
//componente botao
const BotaCabecalho = (props) => {
  return (
    <HeaderButton 
    {...props} //desestruturacao do props
      IconComponent={Ionicons}
      iconSize={23}
      color={'black'}
    />
  )
}

export default BotaCabecalho
