import React from 'react';
import {
  Alert,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Redirect} from 'react-router-native';

const handlePress = (id) => {
  Alert.alert(`Id of this event is ${id}`);
};

export default (Card = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(props.data._id);
      }}>
      <View style={styles.kotak}>
        <Image style={styles.image} source={{uri: props.data.poster}} />
        <View style={styles.info}>
          <Text style={styles.title}>
            {props.data.judul_event.toUpperCase()}
          </Text>
          <Text numberOfLines={4}>{props.data.about.deskripsi}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    textAlign: 'center',
  },
});
