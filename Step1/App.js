import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.stepStyle}>STEP 1</Text>      
        <Text>Aykut Asil React Native</Text>
        <Text style={styles.row}>...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  row: {
    backgroundColor: '#fafa'
  }
});
