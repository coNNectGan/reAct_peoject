import React from 'react';
import {StyleSheet,Text, View } from 'react-native';

const generate = () =>{
    return (
        <View style={styles.generate}>
            <Text>
                Add number
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        generate:{
            backgroundColor:'purple',
            alignItems:'center',
            padding:10,
            width:'100%'
        }
    }
)

export default generate;