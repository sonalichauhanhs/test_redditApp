import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'
import { HEIGHT, WIDTH } from '../Themes/CustomDimension';

// Styles
// import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {   
    };  
  } 
  
  onPress(){
    alert("clicked");
    this.props.navigation.navigate("NavigatioDrawer");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={[styles.imgSplash]} source={Images.splashImg} />

          <View style={styles.dvExloreButton}>
            <TouchableOpacity style={styles.btnExlore} onPress={this.onPress}>
              <Text style={styles.text}> Explore Blossom </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(80, 193, 233)",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgSplash: {
    height: HEIGHT,
    width: WIDTH,
    alignSelf: 'center',
    alignItems: 'center',

  },
  dvExloreButton: {
    width: '100%',
    height: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 140,
    left: 20
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  btnExlore: {
    backgroundColor: '#0B1732',
    padding: 10,
    opacity: 0.5,
    borderRadius: 28
  }

})