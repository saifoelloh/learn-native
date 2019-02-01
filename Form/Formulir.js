import React from 'react';
import {View, Text} from 'react-native';

export default class Formulir extends React.Component {
  state = {
    nama: null,
    email: null,
    kelas: null,
    instansi: null,
    kelas: null,
    telp: null,
    id_tele: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
