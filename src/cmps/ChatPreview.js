import { StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react'
import { useEffect, useState } from 'react';


const ChatPreview = ({ chat }) => {
    useEffect(() => {
        console.log('chat:', chat)

    })
    if (!chat) return <Text>loatext</Text>
    return (
        <View>
            <Text>{chat.att}</Text>

            {chat.isGroup && <View>

                < Text > {chat.groupAtt.info.name}</Text>
                {/* < Image > {chat.groupAtt.info.img}</Image>} */}
            </View>}
            {!chat.isGroup && <View>
                < Text > {chat.groupAtt.info.name}</Text>
                {/* < Image > {chat.groupAtt.info.img}</Image>} */}
            </View>}
        </View >
    )
}
const styles = StyleSheet.create({


});
export default ChatPreview