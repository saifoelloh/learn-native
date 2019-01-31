import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';

export default (NavBar = (props) => {
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.title}>
        <Text>Home</Text>
      </Link>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  title: {
    alignSelf: 'center',
  },
});
