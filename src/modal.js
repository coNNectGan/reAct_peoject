import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, ImageBackground, Modal, Button } from 'react-native';

class ModalComponent extends Component {

    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Button
                    title="Open modal"
                    onPress={this.handleModal}
                />
                <Modal
                visible={this.state.modal}
                animationType={'slide'}
                >
                    
                    <View style={{
                        marginTop: 50,
                        backgroundColor: 'red'
                    }}>
                        <Text>My modal content</Text>
                    </View>
                    <Button
                        title="Close modal"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
        )
    }
}

export default ModalComponent;