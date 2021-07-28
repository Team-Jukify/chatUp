import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ChatUpApp from './src/pages/ChatUpApp.js';
import { store } from './src/store'
import { Provider } from 'react-redux';


export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <ChatUpApp />
    </Provider>
  );
}