#PROJECT ARCHITECTURE:
We have used Ignite framework, (Ignite is a generator for React Native with boilerplates, plugins, and more.) Link: https://github.com/infinitered/ignite
It create the well project structure with default screen.
Ignite provides the packages of Redux, but we have not used Redux in this task due to time constraints.
Source code is well commented.

#WHAT WE DID:

We have created app as per given designs.

- Home Screen -> I have removed button from home screen image, and displayed button to redirect in Post screen.

- Hamburger Menu Screen -> I have displayed navigations with hamburger Menu with Profile Image.

- Post Screen -> I have displayed all posts from given API with scroll as per design.

- Post Detail Screen ->  I have displayed details of selected post with back button navigation in header.

- My Profile Screen -> This screen is static screen. We have used own images because we dont have PSD files.

- Other Screens -> This screens are created blank with screen name on page to navigate from drawer menu.

- Used  npm package 'react-navigation' for navigations.

- Used npm package 'react-native-vector-icons' to display icons in app.

- Used npm package 'native-base' package to use elements like Header, Icon, Content, Container etc.

- Used npm package 'moment' to display date(convert timestamp to date format).

#TO RUN APP, FOLLOW THE BELOW INSTRUCTION:
- Download "Android Studio" from "https://developer.android.com/studio/"
- Follow the installation steps for Android Studio
- Open Simulator from Android Studio to run app in simulator (keep it open)
- Get clone of the project from github (Follow steps defined in "https://github.com/sonalichauhanhs/test_redditApp/blob/master/README.md"
- Open Command Prompt and go to Project Directory (test_redditApp). run below commands in cmd:
- npm install
- React native run-android (it will run app in Simulator or Device - that was open in bullet point no. 3)
