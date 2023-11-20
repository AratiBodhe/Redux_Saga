/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/src/root/store';
import { HomeScreen } from './src/src/saga/Home';




function App(): JSX.Element {


  return (
    <Provider store={store} >
      <HomeScreen />
    </Provider>

  );
}



export default App;
