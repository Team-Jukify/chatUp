import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ChatUpApp  from './pages/ChatUpApp.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aviv is in the houseeee</Text>
      <ChatUpApp/>
      <StatusBar style="auto" />
    </View>
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
