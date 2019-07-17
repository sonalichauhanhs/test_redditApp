import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen';
import SettingScreen from '../Containers/SettingScreen/SettingScreen';
import MessagesScreen from '../Containers/MessagesScreen/MessagesScreen';
import NotificationScreen from '../Containers/NotificationScreen/NotificationScreen';
import MyProfileScreen from '../Containers/MyProfileScreen/MyProfileScreen';
import PostsScreen from '../Containers/PostsScreen/PostScreen';
import PostDetailScreen from '../Containers/PostDetailScreen/PostDetailScreen';
import NavigationDrawer from '../Containers/NavigationDrawer/NavigationDrawer';
import SideBarScreen from '../Containers/SideBarScreen/SideBarScreen';
import SplashScreen from '../Containers/SplashScreen';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SettingScreen: { screen: SettingScreen },
  MessagesScreen: { screen: MessagesScreen },
  NotificationScreen: { screen: NotificationScreen },
  MyProfileScreen: { screen: MyProfileScreen },
  PostsScreen: { screen: PostsScreen },
  PostDetailScreen: { screen: PostDetailScreen },
  NavigationDrawer: { screen: NavigationDrawer },
  SideBarScreen : {screen: SideBarScreen },
  SplashScreen: { screen: SplashScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
