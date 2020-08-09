// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet,Text, View } from 'react-native';
import Nav from './src/nav';
import Generator from './src/generator';
import ListItem from './src/listitem';

class App extends Component {
  state = {
    nameOfAPP:'my app',
    random:[10,300]
  }

  onAddRandom = () => {
    const random1 = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random:[...prevState.random,random1]
      }
   
    })
  }

  onNumberDelete = (position) => {
        const newArray = this.state.random.filter((item,index)=>{
          alert(index)
          return position != index;
          
        })
        
        this.setState({
          random:newArray
        })
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
     <Generator add={this.onAddRandom}/>
     <ListItem 
     items={this.state.random}
     deleted={this.onNumberDelete}
     />
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
