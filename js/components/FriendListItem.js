import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native'


const FriendListItem = (props) => {

    const { friend, byPress } = props;
    console.log(byPress)

    return (
        <TouchableOpacity onPress={byPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: friend.picture.thumbnail}} />
                <View style={styles.info}>
                    <Text style={styles.name}>{friend.name.first} {friend.name.last}</Text>
                    <Text style={styles.email}>{friend.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 40
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    name: {
        fontSize: 20
    },
    email: {
        fontSize: 16,
        fontWeight: '100'
    }
})


export default FriendListItem;