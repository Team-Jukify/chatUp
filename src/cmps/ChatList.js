import { StyleSheet, View } from "react-native"
import React from 'react'
import ChatPreview from "./ChatPreview";
import GroupChatPreview from "./GroupChatPreview";

const ChatList = ({ chatListOp }) => {
    const { chats } = chatListOp

    return (
        <View>
            {chats.map(chat => chat.isGroup ? <GroupChatPreview key={chat._id} chat={chat} /> : <ChatPreview key={chat._id} chat={chat} />)}
        </View>
    )
}

const styles = StyleSheet.create({
});

export default ChatList