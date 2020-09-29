/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const App = () => {

  console.log('desde consola');

  return (
    <>
      <Text style={styles.encabezado}>Hola Henry</Text>
    </>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 50
  }
});

export default App;
