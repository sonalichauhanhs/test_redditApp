import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { isNullOrUndefined } from 'util';
import { Container, Icon, Content } from 'native-base';
import styles from './PostDetailScreenStyle';

export default class PostDetailScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postdetail: {}
        }
    }

    componentDidMount() {
        this.setState({
            postdetail: this.props.navigation.getParam('POST_DETAIL'),
        });
    }

    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.goBack()}>
                            <Icon name='ios-arrow-back' style={styles.drawerIcon} />
                        </TouchableOpacity>
                        {!isNullOrUndefined(this.state.postdetail.thumbnail) && this.state.postdetail.thumbnail != "" ? (
                            <Image
                                resizeMode="contain"
                                source={{ uri: this.state.postdetail.thumbnail }}
                                style={{ width: '100%', height: 300 }}
                            />
                        ) : (
                                null
                            )}
                        
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.commentCountStyle}>{this.state.postdetail.num_comments}</Text>
                                <Text style={styles.dateStyle}>Date</Text>
                                <Text style={styles.dateStyle}>By {this.state.postdetail.author}</Text>
                            </View>
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={styles.titleText}>{this.state.postdetail.title}</Text>
                                <Text>{this.state.postdetail.selftext}</Text>
                            </View>
                        </View>
                    </View>
                </Content>

            </Container>



        );
    }
}