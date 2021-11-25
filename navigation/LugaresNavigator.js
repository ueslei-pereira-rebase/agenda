import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListaDeLugaresTela from "../views/ListaDeLugaresTela";
import NovoLugarTela from "../views/NovoLugarTela";
import Cores from "../constantes/Cores";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaCabecalho from "../componentes/BotaoCabecalho";

//Funciona como uma pilha garantindo a navegação entre as telas
// Estrutura de dados que garante a nagevação entre telas
const Stack = createNativeStackNavigator()

const container = (
  //Componente react que permite a navegacao
  //initial define qual componente sera renderizado primeiro, caso nao seja colocado  é renderizado o primeiro
  //name pode ser qualquer nome, ele sera associado ao componente
  // screenOptions quando aplicado no componente Stack aplica o style para todas as telas, ou pode ser aplicado indivialmente para cada componente
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="ListaDeLugares" 
      // initialRouteName="NovoLugar" 

      screenOptions={{
        headerStyle:{backgroundColor: Cores.primary},
        heaaderTintColor: 'white'
      }}>
      <Stack.Screen 
        name="ListaDeLugares" 
        component={ListaDeLugaresTela}
        options={(props) => ({
          headerRight: () => (
            //headerbutton pode ter varios itens mas nesse caso queremos apenas um item, HeaderButtonComponent indica qual aspecto do botao queremos colocar
            <HeaderButtons HeaderButtonComponent={BotaCabecalho}> 
                <Item 
                  title="Adicionar"
                  iconName="md-add"
                  onPress={() => {
                    props.navigation.navigate('NovoLugar')
                  }}
                />
            </HeaderButtons>
              
          )
        })}
      />
      <Stack.Screen name="NovoLugar" component={NovoLugarTela} />
    </Stack.Navigator>
  </NavigationContainer>
)


export default container
