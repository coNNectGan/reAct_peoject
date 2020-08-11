import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity,Picker,Slider} from 'react-native';

class PickerComponent extends Component {

    state = {
        languaje:'Mandarin',
        value:50
    }

    handleSliderChange = (value) => {
        value:parseInt(value)
    }

    render(){
        return (
            <View>
               <Picker
               style={{width:'100%'}}
               selectedValue={this.state.languaje}
               onValueChange={(itemValue,itemIndex) => this.setState({languaje:itemValue})}
               >

                   <Picker.Item label="Spanish" value="Spanish"/>
                   <Picker.Item label="Mandarin" value="Mandarin"/>


               </Picker>
               <Slider
               value={this.state.value}
               maximumValue={100}
               minimumValue={1}
               step={20}
               onValueChange={this.handleSliderChange}
               />
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        inputwrapper: {
            width: '100%'
        },
        input: {
            width: '100%',
            backgroundColor: 'green',
            marginTop: 20
        },

        users: {
            fontSize: 30,
            borderWidth: 1,
            borderColor: '#cecece',
            padding: 10,
            marginBottom: 20

        }

    }
)

export default PickerComponent;