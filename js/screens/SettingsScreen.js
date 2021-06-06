import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const SettingsItem = (props) => {
    return <Text style={styles.item}>{props.text}</Text>
}

const SettingsHeader = (props) => {
    return <Text style={styles.section}>{props.text}</Text>
}

const SettingsScreen = () => {
    return (
    <View style={styles.container}>
        <SectionList
            sections={
                [
                    {
                        title: 'Version',
                        data: [
                            {key: '1', info: '1.0'}
                        ]
                    },
                    {
                        title: 'Impressum',
                        data: [
                            {key: '3', info: 'Beispiel GmbH'},
                            {key: '4', info: '&copy; 2021'}
                        ]
                    }
                ]
            }
            renderItem={({item}) => <SettingsItem text={item.info} />}
            renderSectionHeader={({section}) => <SettingsHeader text={section.title} />}
        />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    section: {
        backgroundColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 18,
        padding: 5
    },
    item: {
        color: 'dimgrey',
        fontSize: 18,
        padding: 5
    }
});

export default SettingsScreen;