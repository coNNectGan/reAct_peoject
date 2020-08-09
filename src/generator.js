import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// const generate = () =>{
//     return (
//       <Button
//       title="add one"
//       onPress={() => alert('bello+1')}/>
//     )
// }
const generate = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.add()}
        >
            <View style={styles.generate}>
                <Text>
                    Add number
            </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create(
    {
        generate: {
            backgroundColor: 'purple',
            alignItems: 'center',
            padding: 10,
            width: '100%'
        }
    }
)

export default generate;