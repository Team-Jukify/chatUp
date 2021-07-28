import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ChatUpApp from './src/pages/ChatUpApp.js';
import { store } from './src/store'
import { Provider } from 'react-redux';
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import AppHeader from './src/cmps/AppHeader.js';

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppHeader />
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={ChatUpApp} />
        </Switch>
      </NativeRouter>
    </Provider>
  );
}