import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import ChatUpApp from './src/pages/ChatUpApp.js';
import { store } from './src/store'
import { Provider } from 'react-redux';
import { NativeRouter, Route, Switch } from "react-router-native";
import { StyleSheet, View } from 'react-native';
import ChatDetails from './src/pages/ChatDetails.js';
import LoginPage from './src/pages/LoginPage.js';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="white" />
        <NativeRouter>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/chat' component={ChatUpApp} />
            {/* <Route path='/chat' component={ChatDetails} /> */}
          </Switch>
        </NativeRouter>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'aliceblue'
  },
});