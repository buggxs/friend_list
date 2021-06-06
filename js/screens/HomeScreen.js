import React, { setState } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, Text } from 'react-native';

import FriendListItem from '../components/FriendListItem';

class HomeScreen extends React.Component {


    state = { data: [], isLoading: true };

    _fetchData = async () => {     
        // Daten aus dem Web laden (randomuser.me)
        try {
        const response = await fetch('https://randomuser.me/api/?results=20');
        const responseJSON = await response.json();

        this.setState({ data: responseJSON.results, isLoading: false });
        } catch(error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false });
        }
    }

    _refrech = () => {
        this.setState({isLoading: true});
        this._fetchData();
    }

    componentDidMount() {
        this._fetchData();
    }


    render() {
        if (this.state.isLoading)
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="darkorange" />
                </View>
            );

        return (
        <View style={styles.container}>
            
            <FlatList style={{width: '100%'}}
                data={this.state.data} 
                keyExtractor={item => item.email}
                renderItem={({item}) => (
                    <FriendListItem friend={item} byPress={() => 
                            this.props.navigation.navigate('FriendScreen', {friend: item})
                        } 
                    />
                    )} 
                onRefresh={this._refrech}
                refreshing={this.state.isLoading}
                ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}>Sieht leer aus hier...</Text>
                )}
            />
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: 30
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightsalmon'
    },
    listEmtpy: {
        paddingTop: 100,
        fontSize: 32,
        textAlign: 'center'
    }
});

export default HomeScreen;