import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image,
  Text
} from 'react-native';

export default class heighAndWidth extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button');
  }
   render() {
     return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Text style={{fontSize:96}}>What is the best</Text>
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Image source={require('./img/images.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}


AppRegistry.registerComponent('heighAndWidth', () => heighAndWidth);
