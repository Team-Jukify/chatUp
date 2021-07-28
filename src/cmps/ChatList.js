import { StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react'
import { useEffect, useState } from 'react';
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
            {/* {chats.map((chat) => <Text key={chat._id}> {chat.att}</Text>)} */}
        </View>
    )
}
const styles = StyleSheet.create({


});
export default ChatList