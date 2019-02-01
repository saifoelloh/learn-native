import {Constants} from 'expo';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';

import About from './About/About.js';
import Detail from './Detail/Detail.js';
import Home from './Home/Home';
import NavBar from './components/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <NavBar />
          <ScrollView style={styles.kotak}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/item/:id" component={Detail} />
            </Switch>
          </ScrollView>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#00bfff',
  },
  kotak: {
    paddingVertical: 20,
  },
});
