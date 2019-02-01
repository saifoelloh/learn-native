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
import {Link} from 'react-router-native';

const handlePress = (id) => {
  Alert.alert(`Id of this event is ${id}`);
};

export default (Card = (props) => {
  return (
    <TouchableOpacity>
      <Link to={`/item/${props.data._id}`}>
        <View style={styles.kotak}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: props.data.poster}}
          />
          <View style={styles.info}>
            <Text style={styles.title}>
              {props.data.judul_event.toUpperCase()}
            </Text>
            <Text numberOfLines={4}>{props.data.about.deskripsi}</Text>
          </View>
        </View>
      </Link>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  kotak: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#fffaf0',
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
