import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, TextInput, Text } from "react-native";

const LoginForm = ({ login, errMsg }) => {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView style={styles.formCon}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                placeholder="username"
                value={username}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="password"
                keyboardType="numeric"
                secureTextEntry={true}
            />
            {errMsg && <Text style={styles.errMsg}>{errMsg}</Text>}
            <Button
                onPress={() => login(username, password)}
                title="Login"
                color="#841584"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    formCon: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        width: '60%',
        height: 60,
        margin: 12,
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 10
    },
    errMsg: {
        color: 'red',
        marginBottom: '10px'
    },
});

export default LoginForm;