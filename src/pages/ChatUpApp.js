import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { useEffect } from 'react'
import { useState } from "react";
import ChatList from "../cmps/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { loadChats } from '../store/actions/chatActions'
import { loadUsers } from "../store/actions/userActions";

const ChatUpApp = () => {
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatReducer.chats)
    const users = useSelector(state => state.userReducer.users)

    useEffect(() => {
        dispatch(loadUsers())
        dispatch(loadChats())
    }, [])

    if (!chats || !users) return (<View><Text>LodView</Text></View>)

    const chatListOp = {
        chats
    }

    return (
        <View style={styles.appCon}>
            <Text style={styles.header}>Chats</Text>
            <ChatList chatListOp={chatListOp} />
        </View>
    )
}

const styles = StyleSheet.create({
    appCon: {
        width: '100%',
        display: "flex",
        alignItems: "center"
    },
    header: {
        fontSize: 25,
        borderBottomWidth: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default ChatUpApp