import React from 'react';
import container from './navigation/LugaresNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk' //permite operacoes asincronas, intercepta as acoes enviadas  antes de chgar ao reducer de destino
import lugaresReducer from './store/lugares-reducer';

//aqui pode exisitr diversos reducer, quando uma acao é disparada todos os reducer recebem essa acao.
//cada reducer que decide qual tipo de operacao operar
const rootReducer = combineReducers({
  lugares: lugaresReducer
})
//apply nao esta sendo usado aqui
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default function App() {
  //nao usar {} no return, essa expressao em javascript é um objeto json mas o que queremos é devolver a funcao container
  return <Provider store={store}>
    {container}
  </Provider>
}
