import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Linking } from 'react-native';
import profile from '../images/profile.png';
import IconButton from './IconButton';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 16,
        marginBottom: 8,
    },
    bio: {
        width: 200,
        margin: 8,
        textAlign: 'center',
    },
    name: {
        fontWeight: 'bold',
    },
});

class InfoScreen extends Component {
    render() {
        const openWebsite = () => Linking.openURL('http://www.ScottBouloutian.com');
        const openGithub = () => Linking.openURL('https://github.com/scottbouloutian');
        return (
            <View style={styles.view}>
                <Image style={styles.profile} source={profile} resizeMode="contain" />
                <Text style={styles.bio}>
                    My name is
                    <Text style={styles.name}> Scott Bouloutian </Text>
                    and I am a software engineer with a passion for technology.
                </Text>
                <IconButton icon="safari" text="www.ScottBouloutian.com" onPress={openWebsite} />
                <IconButton icon="github" text="ScottBouloutian" onPress={openGithub} />
            </View>
        );
    }
}
InfoScreen.navigationOptions = {
    title: 'Information',
    headerTintColor: '#c0392b',
};
export default InfoScreen;
