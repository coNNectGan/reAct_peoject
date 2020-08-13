// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationActions } from 'react-navigation';



class UserScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    try me!
                </Text>
                <Button
                
                title='Go to Home page'
                onPress={() => this.props.navigation.navigate('Home')}
                
                />
                
            </View>
        )
    }
  
}

export default UserScreen;