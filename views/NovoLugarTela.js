import React, {useState} from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import * as lugaresActions from '../store/lugares-actions'
import Cores from "../constantes/Cores";
import { useDispatch } from "react-redux";
import { useLinkProps } from "@react-navigation/native";

const NovoLugarTela = (props) => {
  const [novoLugar, setNovoLugar] = useState('')
  const [novoLugar1, setNovoLugar1] = useState('')
  const dispatch = useDispatch()

  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto)
  }

  const novoLugarAlterado1 = (texto) => {
    setNovoLugar1(texto)
  }

  const adicionarLugar = () => {
    const acao = lugaresActions.addLugar(novoLugar,novoLugar1)
    dispatch(acao)
    // store.dispatch(acao)
    props.navigation.goBack()
  }
  return (
   <ScrollView>
     <View style={styles.form}>
      <Text style={styles.titulo}>
        Nome
        <TextInput 
          style={styles.textInput} 
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        Telefone
        <TextInput 
          style={styles.textInput} 
          onChangeText={novoLugarAlterado1}
          value={novoLugar1}
        />
        <Button 
          title="Salvar Lugar"
          color={Cores.primary}
          onPress= {() => adicionarLugar()}
        />
      </Text>
     </View>
   </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    margin: 40
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12
  },
  textInput: {
    borderBottomColor: '#DDD' ,
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8
  }

})