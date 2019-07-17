import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

module.exports = {
  HEIGHT: height,
  WIDTH: width,
}
