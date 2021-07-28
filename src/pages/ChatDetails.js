import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ChatDetails() {

    return (
        <View style={styles.container}>
            <Text>Details!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aliceblue'
    },
});