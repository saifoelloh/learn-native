import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class Kartu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} srouce={props.data.iamge} />
        <View style={styles.info}>
          <Text style={styles.title}>{props.data.name}</Text>
          <Text>{props.data.info}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 2,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    alignItems: 'center',
  },
});
