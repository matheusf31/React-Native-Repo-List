import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello</Text>
      <Text style={styles.welcome}>Matheus</Text>
    </View>
  );
}

export default App;
