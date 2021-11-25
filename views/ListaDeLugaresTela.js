import React from "react";
import {FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import LugarItem from "../componentes/LugarItem";
import Lugar from "../modelo/Lugar";
import lugaresReducer from "../store/lugares-reducer";

const ListaDeLugaresTela = (props) => {
  // o 1 "lugares" pegamos la no App.js rootReducers o 2 "lugares" pegamos do estado inicial de lugares-reducer
  const lugares = useSelector(estado => estado.lugares.lugares)
  return (
    <FlatList
      data={lugares}
      keyExtractor={lugar => lugar.id}
      renderItem={lugar => 
        <LugarItem 
          nomeLugar={lugar.item.titulo}
          nomeLugar1={lugar.item.titulo1}
          // onSelect={() => props.navigation.navigate('DetalhesDolugar',{
          //   tituloLugar: lugar.item.titulo, idLugar: lugar.item.id
          // })}
        />}
    />
  )
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})