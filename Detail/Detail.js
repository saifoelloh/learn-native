import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>Ini Item {this.props.match.params.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
