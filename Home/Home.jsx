import React from 'react';
import {View} from 'react-native';

import Kartu from '../components/Card.jsx';

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
  };
  render() {
    return (
      <View>
        {this.state.data.map((datum, key) => (
          <Kartu key={key} data={datum} />
        ))}
      </View>
    );
  }
}
