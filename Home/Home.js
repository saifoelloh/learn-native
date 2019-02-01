import * as axios from 'axios';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Card from '../components/Card.js';

export default class Home extends React.Component {
  state = {
    data: [
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'andy',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'andy',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'andy',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'andy',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'andy',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'smith',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
      {
        image:
          'https://www.genymotion.com/wp-content/uploads/2017/07/Genymotion-2.10-OpenGApps-Newsletter-1.jpg',
        name: 'amber',
        info:
          'Now you can have your applications relying on Google Play Service and Google Play Store working perfectly fine.',
      },
    ],
    event: [],
    loading: true,
  };

  getData = () => {
    axios
      .get('https://eventstory.herokuapp.com/api/event')
      .then((res) => {
        this.setState({
          event: res.data,
          loading: !this.state.loading,
        });
      })
      .catch((err) => console.error(err.response));
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
          this.state.event.map((datum, key) => (
            <Card key={key} data={datum} kunci={key.toString()} />
          ))
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
