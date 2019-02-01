import * as axios from 'axios';
import React from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';

export default class Detail extends React.Component {
  state = {
    state: [],
    width: null,
    height: null,
    loading: true,
  };

  getData = () => {
    axios
      .get(
        `https://eventstory.herokuapp.com/api/event/${
          this.props.match.params.id
        }`,
      )
      .then((res) => {
        this.setState({
          data: res.data,
          loading: !this.state.loading,
        });
      })
      .catch((err) => Alert.alert(err));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.kotak}>
            <Text style={styles.title}>
              {this.state.data.judul_event.toUpperCase()}
            </Text>
            <Image
              style={styles.gambar}
              resizeMode="contain"
              source={{uri: this.state.data.poster}}
            />
            <Text style={styles.info}>{this.state.data.about.deskripsi}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  kotak: {
    flex: 1,
  },
  gambar: {
    flex: 1,
    height: 200,
    marginVertical: 20,
  },
  info: {
    flex: 3,
  },
});
