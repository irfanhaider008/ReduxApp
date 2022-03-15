import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import Test from './Test'
// import reducer from './Redux/reducer'
import { createStore, applyMiddleware } from 'redux'
import reducer from './Redux/reducer';
import SubPart from './SubPart'
import thunk from 'redux-thunk';
const App = () => {
  const store =createStore(
    reducer, applyMiddleware(thunk)
  );
  return (
    <Provider store={store}>
   <Test/>
   <SubPart/>
    </Provider>
  )
}

export default App
