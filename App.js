import {Constants} from 'expo';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NativeRouter, Route, Switch} from 'react-router-native';

import Home from './Home/Home';
import NavBar from './components/NavBar';

export default class App extends React.Component {
  state = {
    arr: ['coba', 'saja', 'bro', 'there'],
  };

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <NavBar />
          <ScrollView>
            <Switch>
              <Route exact path="/" component={Home} />
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
    backgroundColor: 'lightgreen',
  },
});
