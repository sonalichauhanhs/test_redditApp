import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { HEIGHT, WIDTH } from '../Themes/CustomDimension';
import { Images } from '../Themes';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={[styles.imgSplash]} source={Images.splashImg} />
          <View style={styles.dvExloreButton}>
            <TouchableOpacity style={styles.btnExlore} onPress={() => this.props.navigation.navigate('NavigationDrawer')} >
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