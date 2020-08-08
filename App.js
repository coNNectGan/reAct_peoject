// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet,Text, View } from 'react-native';
import Nav from './src/nav';
import Generator from './src/generator';

class App extends Component {
  state = {
    nameOfAPP:'my app'
  }
render() {
  return (
    <View style ={
     styles.container
    }>
      

      <Nav name={this.state.nameOfAPP}/>
      <View style={styles.basicView}>
        <Text style={styles.basi}>
          Bello
        </Text>
      </View>
     <Generator/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicView:{
    backgroundColor:'blue',
    width:'50%',
    marginBottom:5,
  },
  basicText:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    padding:20,
  }
});

export default App;
