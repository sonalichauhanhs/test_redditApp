import React, { Component } from "react";
import { Image, View, TouchableOpacity, Alert, Text } from "react-native";
import { Container, Content } from 'native-base';
import { Icon } from 'native-base';
import { Images } from '../../Themes';
import { DrawerActions } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './SideBarStyle'

export default class SideBarScreen extends Component {

  constructor(props) {
    super(props);
  }

  onLogout() {
    var that = this
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', onPress: () => that.onExit('cancel'), style: 'cancel' },
        { text: 'Ok', onPress: () => that.onPress('ok') },
      ],
      { cancelable: false }
    )
  }
  onExit(myaction) {
    if (myaction == 'ok') {
      this.props.navigation.navigate('SplashScreen');
    }
  }

  onPress(screenName) {
    this.props.navigation.navigate(screenName, { 'isFromMainMenu': true });
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  render() {
    return (
      <Container style={[{ backgroundColor: '#ddd' }]}>
        <Content style={[{ marginBottom: 20, backgroundColor: '#ddd' }]} showsVerticalScrollIndicator={false}>

          <View>

          </View>

          <View style={styles.profileSec}>
            <View style={styles.profileInfo}>
              <Image style={styles.profilePicture} source={Images.profileGirlImg} />
              <Text style={styles.profileName}> Kika </Text>
              <Text style={styles.profileEmail}> k@blossomeducational.com </Text>
            </View>
          </View>

          <View style={styles.borderbottom}></View>

          <View style={styles.list}>

            <TouchableOpacity onPress={() => this.onPress('PostScreen')} >
              <View style={styles.menuList}>
                <Icon active name='ios-home' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>Posts</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPress('MyProfileScreen')} >
              <View style={styles.menuList}>
                <FontAwesome active name='user' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>My Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPress('NotificationScreen')} >
              <View style={styles.menuList}>
                <Icon active name='ios-notifications' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>Notifications</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPress('MessagesScreen')} >
              <View style={styles.menuList}>
                <Entypo active name='message' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>Messages</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPress('SettingScreen')} >
              <View style={styles.menuList}>
                <Feather active name='settings' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>Setting</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onLogout()} >
              <View style={styles.menuList}>
                <Icon active name='ios-exit' style={styles.drawerIcon} />
                <Text style={[styles.menuText]}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>

        </Content>
      </Container>
    );
  }
}
