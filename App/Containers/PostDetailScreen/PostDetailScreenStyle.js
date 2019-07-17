
import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/';
import { HEIGHT, WIDTH } from '../../Themes/CustomDimension';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container1: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    flex: 1,
  },
  dateStyle: {
    paddingRight: 20,
    textAlign: 'center'
  },
  commentCountStyle: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 13,
    width:'100%',
    alignSelf: 'center'
  },
  headerBg: {
    backgroundColor: '#FFF',
    height: (HEIGHT * 0.08),
    justifyContent: 'flex-start',
    width:"100%",
    
  },
  drawerIcon: {
    color: '#000',
    marginRight: 25,
    paddingTop: 7,
    minHeight: 35,
  },
  headerTitle: {
    marginTop: 5,
    color: '#000',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
    alignContent: 'center',
    textAlign:'center',
    alignSelf: 'center'
  },
  btnBack :{
    position: 'relative',
    marginLeft: 20
  }

})
