import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Header, Title, Icon, Footer, FooterTab, Badge, Content, Right } from 'native-base';
import { DrawerActions } from 'react-navigation';
import styles from './PostScreenStyle';

export default class PostScreen extends Component {

    constructor(props) {
        super(props);
        this.getListItem = this.getListItem.bind(this);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    componentDidMount() {
        return fetch('https://api.reddit.com/r/pics/hot.json', { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responseJson:" + JSON.stringify(responseJson));
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data.children,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getListItem(data) {
        this.props.navigation.navigate(
            "PostDetailScreen",
            {
                POST_DETAIL: data,
            });
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

                        <View style={{}}>
                            <Title style={styles.headerTitle}> Posts </Title>
                        </View>
                    </View>
                </Header>

                <Content style={styles.content}>
                    <FlatList data={this.state.dataSource} style={{ width: '100%' }}
                        renderItem={({ item }) =>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity activeOpacity={0.9} onPress={this.getListItem.bind(this, item.data)}>
                                    <View style={styles.container} >
                                        <Image
                                            source={{ uri: item.data.thumbnail }}
                                            style={styles.imageThumb}
                                        />
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.dateStyle}>
                                                {item.data.created}
                                            </Text>
                                            <Text style={styles.commentCountStyle}>{item.data.num_comments}</Text>
                                        </View>
                                        <Text numberOfLines={2} style={styles.titleStyle}>
                                            {item.data.title}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        numColumns={2}
                        keyExtractor={(item, index) => index
                        }>
                    </FlatList>
                </Content>

            </Container>

        );
    }
}