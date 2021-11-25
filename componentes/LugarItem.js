import React from "react";
import { Image, Text, View , StyleSheet, TouchableOpacity } from 'react-native'
import Cores from '../constantes/Cores'

const LugarItem = (props) => {
  //torna o componente tocavel e da um feedback visual
  return(
    <TouchableOpacity
        onPress={props.onSelect}
        style={styles.lugaItem}
      >
        {/* <Image 
          style={styles.imagem}
          source={{uri: props.image}}
        /> */}

        <View
          style={styles.infoContainer}
        >
          <Text
            style={styles.nomeLugar}
          >{props.nomeLugar}</Text>
          <Text
            style={styles.endereco}
          >{props.nomeLugar1}</Text>
        </View>
      </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  lugarItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    endereco: {
        color: '#777',
        fontSize: 16,
    }
})

export default LugarItem