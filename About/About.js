import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>Ini Halaman About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
