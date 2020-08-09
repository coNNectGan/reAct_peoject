import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (
        props.items.map((items, id) => (
            <TouchableOpacity
                style={styles.listItem}
                key={id}
                onPress={() => props.deleted(id)}>

                <Text>{items}</Text>

            </TouchableOpacity>

        ))

    )
}

const styles = StyleSheet.create(
    {
        listItem: {
            backgroundColor: '#cecece',
            alignItems: 'center',
            padding: 10,
            width: '100%',
            marginTop: 5

        }
    }
)

export default ListItem;