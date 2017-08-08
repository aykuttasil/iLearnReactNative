import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class  LoginActivity extends React.Component{
    
    render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text style={styles.row}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    backgroundColor: '#fafa'
  }
});
