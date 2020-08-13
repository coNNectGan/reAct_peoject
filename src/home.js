import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationActions } from 'react-navigation';



class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    try me!
                </Text>
                <Button
                
                title='Go to user page'
                onPress={() => this.props.navigation.navigate('User')}
                
                />
                
            </View>
        )
    }
  
}

export default HomeScreen;