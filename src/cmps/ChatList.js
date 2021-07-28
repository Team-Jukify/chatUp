import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import { useEffect } from 'react';
import ChatPreview from "./ChatPreview";


const ChatList = ({ chatListOp }) => {
    const chats = chatListOp.chats
    useEffect(() => {
        console.log('chats:', chats)
    })
    if (!chats) return <Text>loatext</Text>
    return (
        <View>
            <Text>ChatList!</Text>
            {chats.map((chat) => <ChatPreview key={chat._id} chat={chat}></ChatPreview>)}
        </View>
    )
}
const styles = StyleSheet.create({


});
export default ChatList