import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Container, Header, Title, Icon, Content } from 'native-base';
import styles from './MessagesScreenStyle';

export default class MessageScreen extends Component {

    constructor(props) {
        super(props);
    }

    openDrawerMenu() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return (
            <Container>
                <Header style={styles.headerBg}>
                    <View style={styles.headerView}>
                        <TouchableOpacity style={styles.drawerSec} onPress={() => this.openDrawerMenu()}>
                            <Icon name='ios-menu' style={styles.drawerIcon} />
                        </TouchableOpacity>
                        <Title style={styles.headerTitle}> Messages </Title>
                    </View>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.noDataFoundSec}>
                        <Text style={styles.noDataFoundText}>Message Screen</Text>
                    </View>
                </Content>
            </Container>

        );
    }
}