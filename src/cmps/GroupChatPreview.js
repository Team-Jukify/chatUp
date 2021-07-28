import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import { useEffect } from 'react';


const GroupChatPreview = ({ chat }) => {
    useEffect(() => {

    })
    if (!chat) return <Text>loatext</Text>
    return (
        <View>
            <Text>Group preview!</Text>
            {/* <Text>{chat.att}</Text> */}

            {/* {chat.isGroup && <View> */}

            {/* < Text > {chat.groupAtt.info.name}</Text> */}
            {/* < Image > {chat.groupAtt.info.img}</Image>} */}
            {/* </View>} */}
            {/* {!chat.isGroup && <View> */}
            {/* < Text > {chat.groupAtt.info.name}</Text> */}
            {/* < Image > {chat.groupAtt.info.img}</Image>} */}
            {/* </View>} */}
        </View >
    )
}
const styles = StyleSheet.create({


});
export default GroupChatPreview;