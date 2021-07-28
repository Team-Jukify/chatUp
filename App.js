import { store } from './store'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ChatUpApp from './pages/ChatUpApp.js';
import { loadChats } from './store/actions/chatActions.js';
import { Provider, useSelector } from 'react-redux';


export default function App() {
  // const dispatch = useDispatch()
  // const chats = useSelector(state => state.chatsReducer.chats)

  useEffect(() => {
    // console.log(chats);
    // dispatch(loadChats())
  })

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Aviv is in the house</Text>
        <ChatUpApp />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
