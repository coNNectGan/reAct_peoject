import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TabBarIOS } from 'react-native';

class Input extends Component {
    state = {
        myTextInput: '',
        users:['Gan','James','Lisa']
    }

    onChangeInput = (event) => {
        this.setState(
            {
                myTextInput: event
            }
        )
    }

    onAddUSER = () => {
        this.setState(prevState => {
            return {
                myTextInput:'',
                users:[...prevState.users,prevState.myTextInput]
            }
        })

    }

    render() {
        return (
            <View style={styles.inputwrapper}>
                {
                    this.state.users.map(
                        item => (
                            <Text style={styles.users} key={item}>{item}</Text>
                        )
                    )
                }
                <TextInput
                    value={this.state.myTextInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                // multiline={true}
                // maxLength={5}
                // editable={true}
                // autoCapitalize={'none'}
                />
                <Button
                    title="Add user name"
                    onPress={this.onAddUSER}
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

export default Input;