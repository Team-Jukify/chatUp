import { StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react'
import { useEffect, useState } from 'react';
import { chatService } from '../services/chats.service'
import { useSelector } from "react-redux";


const ChatList = () => {
    const chats = useSelector(state => state.chatReducer.chats)

    if (!chats) return <Text>loatext</Text>

    return (
        <View>
            <Text>ChatList!</Text>
            {chats.map((chat) => <Text key={chat._id}> {chat.att}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({


});

export default ChatList