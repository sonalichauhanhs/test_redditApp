import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes';
import { HEIGHT,WIDTH } from '../../Themes/CustomDimension';


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  topimage:{
    height: (HEIGHT * 0.27),
    width: (WIDTH),
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  backimage: {
    height: (HEIGHT * 0.73),
    width: (WIDTH * 0.85),
    alignItems: "flex-start"
  },
  list: {
    width: (WIDTH * 0.80),
    left:7,
    top:25
  },
  menuList: {
    backgroundColor: 'transparent',
    marginBottom: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  ic_image: {
    width: Fonts.size.h1u,
  },
  menuText:{
    fontSize: Fonts.size.regular,
    marginLeft: 15,
    width: (WIDTH * 0.66),
    color:'grey',

  },
  bottomtexturl: {
    height: 18,
    width : (WIDTH * 0.80),
    color: 'black',
    fontWeight: 'bold',
    textAlign:'center',
    fontFamily: 'Dosis-Bold',
    justifyContent: 'center',
    marginTop:10
  },
  bottomtext: {
    height: 18,
    width : (WIDTH * 0.80),
    color: 'black',
    textAlign:'center',
    fontFamily: 'Dosis-Regular',
    justifyContent: 'center',
    marginTop:10
  },
  centered: {
    alignItems: 'center'
  },
  drawerIcon:{
    fontSize: Fonts.size.h4,
    marginLeft:5,
    marginTop:2,
    marginRight:5,
    minHeight:35,
    color: 'grey'
  },
  selectedDrawerMenuIcon: {
    color : '#f49c30',
    fontSize: Fonts.size.h4,
    marginLeft:5,
    marginTop:2,
    marginRight:5,
  },
  profilePicture :{
    width: 80,
    height: 80,
    alignSelf:'center',
    backgroundColor:'#4caaf5',
    borderRadius:50,
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:2,
    borderColor:'#fff'

  },
  profileSec:{
    paddingTop:20,
    // backgroundColor:'#4caaf5'
  },
  profileInfo:{

  },
  profileName:{
    marginTop : 12,
    fontSize: Fonts.size.medium,
    color : 'black',
    alignSelf: 'center',
    paddingBottom:10,
  },
  profileEmail:{
    marginTop : 5,
    fontSize: Fonts.size.medium,
    color : 'grey',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  borderbottom:{
    borderWidth: 0.6,
    borderColor: "grey",
    marginLeft: 20,
    marginRight: 20,
  },

})
