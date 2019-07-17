
import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts } from '../../Themes/';
import { HEIGHT, WIDTH } from '../../Themes/CustomDimension';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,

  },
  titleTextColor: {
    marginTop: (HEIGHT * 0.20),
    textAlign: 'center',
    color: 'black',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    letterSpacing: 1.6,
    paddingBottom: 30,
  },
  downarrow: {
    position: 'absolute',
    right: 0,
    top: 22
  },
  button: {
    backgroundColor: 'green',
    borderRadius: (WIDTH * 0.07),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
    height: (WIDTH * 0.14),
    width: (WIDTH * 0.70),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  activeBtn: {
    fontSize: Fonts.size.input,
    color: "#FFFFFF",
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    letterSpacing: 1.6
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 13,
  },
  headerBg: {
    backgroundColor: '#2089dc',
    height: (HEIGHT * 0.08),
    justifyContent: 'flex-start'
  },
  drawerIcon: {
    color: '#000',
    marginRight: 25,
    paddingTop: 7,
    minHeight: 35,
    marginLeft: 15
  },
  headerTitle: {
    marginTop: 5,
    color: 'white',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
  },
  listSection: {
    marginLeft: 5,
    flexDirection: 'row',
    marginTop: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 40,
  },
  listSectionflex: {
    flex: 1
  },
  settingscreen: {
    flex: 1,
    width: WIDTH - 70
  },
  textleng: {
    fontSize: Fonts.size.input,
    color: '#000000',
    textAlignVertical: 'center',
    // marginTop: 10
    width: WIDTH - 50
  },
  lblshow: {
    backgroundColor: '#fff',
    color: '#2289dc',
    padding: 7,
    borderRadius: (Platform.OS === 'ios') ? 18 : 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#2289dc',
    paddingLeft: 15,
    paddingRight: 15
  },
  piker: {
    borderWidth: 1,
    width: 150,
    fontWeight: 'bold',
    position: 'relative',
    bottom: 12,
    right: -30
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  spaceup: {
    position: 'relative',
    top: -15,

  },
  settingtxt: {
    fontSize: Fonts.size.input,
    color: '#000000',
    textAlignVertical: 'center',
    fontFamily: Fonts.type.medium,
  },
  noDataFoundSec: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: (HEIGHT * 0.16)
  },
  noDataFoundText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
    marginBottom: 15,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    position: 'relative',
    top: Platform.OS === 'ios' ? -15 : 0,
  },
  coverImage: {
    width: '100%',
    height: 200
  },
  profileImageStyle: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20
  },
  profileNameStyle: {
    paddingTop: 50,
    marginLeft: 20,
    fontSize: 16
  },
  lineStyle: {
    borderWidth: 1,
    width: 80,
    marginLeft: 20,
    marginTop: 10,
    borderColor: 'grey'
  },
  bioStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  }
})
