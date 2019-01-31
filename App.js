import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './Home/Home.jsx';

export default class App extends React.Component {
  state = {
    arr: ['coba', 'saja', 'bro', 'there'],
  };

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
