import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Button, TextInput, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { checkLoggedinUser, login } from "../store/actions/userActions";
import { Redirect } from "react-router-native";

const LoginPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    const [name, onChangeName] = useState('Aviv Zohar');
    const [password, onChangePassword] = useState('1234');
    const [errMsg, setErrMsg] = useState(null)

    useEffect(() => {
        dispatch(checkLoggedinUser())
    })

    const loginUser = async () => {
        if (!name || !password) return setErrMsg('Please fill up all fields')
        const userToLogin = { name, password }
        dispatch(login(userToLogin))
    }

    if (user) {
        return <Redirect to={{ pathname: "/chat" }}
        />
    }

    return (
        <SafeAreaView style={styles.formCon}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                placeholder="name"
                value={name}
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
                onPress={loginUser}
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

export default LoginPage;