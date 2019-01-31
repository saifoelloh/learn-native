import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (NavBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Navbar {props.data}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
});
