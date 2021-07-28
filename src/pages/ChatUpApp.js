import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { useEffect } from 'react'
import { useState } from "react";
import ChatList from "../cmps/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { loadChats } from '../store/actions/chatActions'

const ChatUpApp = () => {
    const [text, onChangeText] = useState("Useless Text");
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatReducer.chats)

    useEffect(() => {
        dispatch(loadChats())
        console.log(chats);
    }, [])

    if (!chats) return
    console.log('chats:', chats)
    const chatListOp = { chats }
    return (
        <View>
            <Text>chatUpApp</Text>
            <Text>Chats</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search Chats"
                keyboardType="default"
            />
            <ChatList chatListOp={chatListOp} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
export default ChatUpApp