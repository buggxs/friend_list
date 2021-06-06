import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';

const FriendScreen = (props) => {
    const friend = props.route.params.friend;

    return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
        <Image
            style={styles.image}
            source={{uri: friend.picture.large}} 
        />

        <Text>{friend.name.first} {friend.name.last}</Text>
    </ScrollView>
    );
}

// 75% der Displaybreite als größe verwenden
const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    scrollView: {
        backgroundColor: '#fff',
    },
    image: {
        height: width,
        width: width,
        marginBottom: 20
    }
});

export default FriendScreen;