import { StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react'
import { useState } from "react";
import ChatList from "../cmps/ChatList";
import { useDispatch, useSelector } from "react-redux";

const ChatUpApp = () => {
    const [text, onChangeText] = useState("Useless Text");
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatsReducer.chats)

    useEffect(() => {
        // console.log(chats);
        // dispatch(loadChats())
    })

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
            <ChatList />
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