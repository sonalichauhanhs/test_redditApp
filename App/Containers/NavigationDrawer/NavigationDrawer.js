import { createDrawerNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import SettingScreen from '../SettingScreen/SettingScreen';
import NotificationScreen from '../NotificationScreen/NotificationScreen';
import MessagesScreen from '../MessagesScreen/MessagesScreen';
import PostScreen from '../PostsScreen/PostScreen';
import SideBarScreen from '../SideBarScreen/SideBarScreen';
import MyProfileScreen from '../MyProfileScreen/MyProfileScreen';

const drawerRouter = createDrawerNavigator(
  {
    PostScreen: { screen: PostScreen },
    MyProfileScreen: { screen: MyProfileScreen },
    NotificationScreen: { screen: NotificationScreen },
    MessagesScreen: { screen: MessagesScreen },
    SettingScreen: { screen: SettingScreen }
  },
  {
    unmountInactiveRoutes: true,
    contentComponent: props => <SideBarScreen {...props} />
  }
);

export default createAppContainer(drawerRouter);
