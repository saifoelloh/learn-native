import * as axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ProgressBarAndroid,
} from 'react-native';

import Card from '../components/Card.js';

export default class Home extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  getData = () => {
    axios
      .get('https://eventstory.herokuapp.com/api/event')
      .then((res) => {
        this.setState({
          data: res.data,
          loading: !this.state.loading,
        });
      })
      .catch((err) => console.error(err.response));
  };

  _keyExtractor = (item, index) => {
    return item._id;
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ProgressBarAndroid styleAttr="LargeInverse" color="blue" />
        ) : (
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={({item, key}) => {
              return (
                <View>
                  <Card data={item} kunci={item._id.toString()} />
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
