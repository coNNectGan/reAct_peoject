// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet,Text, View,ScrollView,ActivityIndicator, Image,ImageBackground} from 'react-native';
import Nav from './src/nav';
import Generator from './src/generator';
import ListItem from './src/listitem';
import Input from './src/input';
import Picker from './src/picker';
import gitcat from './src/images/gitcat.png';
import ModalComp from './src/modal';

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
      

      {/* <Nav name={this.state.nameOfAPP}/>
      <View style={styles.basicView}>
        <Text style={styles.basi}>
          Bello
        </Text>
      </View>
     <Generator add={this.onAddRandom}/>
     <ListItem 
     items={this.state.random}
     deleted={this.onNumberDelete}
     /> */}
  <ScrollView style = {{width:'100%'}}
  // onContentSizeChange={(w,h) => alert('bello')}
  // onMomentumScrollBegin={() => alert()}
  // onMomentumScrollEnd={()=>alert('end')}
  >
  {/* <Input/> */}
  <Picker/>
  <ActivityIndicator
    size="large"
    color="#0000ff"
    animating={true}
  
  />

{/* <ImageBackground
  source={{uri:'https://picsum.photos/id/237/200/300'}}
  style={styles.gitcat}
  resizeMode="cover"
  onLoadEnd= { () => alert('Image loaded.')}
  >
  <Text>Bello</Text>
  </ImageBackground> */}

  <ModalComp/>

  </ScrollView>

  
    
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
  },
  gitcat:{
    width:'100%',
  height:300,
    marginTop:20
  }
});

export default App;
