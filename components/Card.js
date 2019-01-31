import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default (Card = (props) => {
  return (
    <View style={styles.kotak}>
      <Image style={styles.image} source={{uri: props.data.image}} />
      <View style={styles.info}>
        <Text style={styles.title}>{props.data.name.toUpperCase()}</Text>
        <Text>{props.data.info}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  kotak: {
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  image: {
    flex: 2,
  },
  info: {
    flex: 3,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
