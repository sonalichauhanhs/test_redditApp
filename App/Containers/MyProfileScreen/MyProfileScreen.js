import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Container, Icon, Content } from 'native-base';
import { Images } from '../../Themes';
import styles from './MyProfileScreenStyle';

export default class MyProfileScreen extends Component {

    constructor(props) {
        super(props);
    }

    openDrawerMenu() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <View>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.openDrawerMenu()}>
                            <Icon name='ios-menu' style={styles.drawerIcon} />
                        </TouchableOpacity>
                        <Image resizeMode="stretch" source={Images.naturallImg} style={styles.coverImage} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            resizeMode="contain"
                            source={Images.newgirlImg}
                            style={styles.profileImageStyle} />
                        <Text style={styles.profileNameStyle}> Jeffery H </Text>
                    </View>

                    <View style={styles.lineStyle}></View>

                    <View style={styles.bioStyle}>
                        <Text> I became a vegan in my early twenties, and was immediately astonished by how great I felt-and how rewarding I found my new vegan lifestyle to be. </Text>
                    </View>

                    <View>

                        <View style={{ flexDirection: 'row', width: '100%', marginLeft: 10, marginTop: 25 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#579630bf', padding: 15, width: '50%', marginLeft: 10
                            }}>
                                <Text style={{ textAlign: 'center', color: 'white' }}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#d8d8d8', padding: 15, width: '50%', marginRight: 10 }}>
                                <Text style={{ textAlign: 'center' }}>Message</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Content >

            </Container >

        );
    }
}