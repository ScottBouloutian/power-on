/*
    Power, a wake on LAN mobile application.
    Copyright (C) 2017  Scott Bouloutian

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listView: {
        backgroundColor: '#ecf0f1',
    },
    headerButton: {
        padding: 16,
    },
    deviceView: {
        alignItems: 'center',
        width: '100%',
        height: 175,
        backgroundColor: '#ecf0f1',
    },
    deviceTitle: {
        marginTop: 16,
        fontSize: 24,
        color: '#2c3e50',
    },
    deviceSubtitle: {
        fontSize: 12,
        color: '#34495e',
    },
    deleteButton: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#e74c3c',
    },
    trashIcon: {
        width: 100,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#bdc3c7',
    },
    welcomeText: {
        width: 200,
        color: '#c0392b',
        fontSize: 18,
        textAlign: 'center',
    },
});

class HomeScreen extends Component {
    render() {
        const getStarted = (
            <View style={styles.view}>
                <Text style={styles.welcomeText}>
                    Touch the + in the top right corner to add a device!
                </Text>
            </View>
        );
        return getStarted;
    }
}
HomeScreen.navigationOptions = ({ navigation }) => ({
    title: 'Power',
    headerTintColor: '#c0392b',
    headerLeft: (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Info')}
        >
            <Icon name="info" size={18} color="#c0392b" />
        </TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Device')}
        >
            <Icon name="plus" size={18} color="#c0392b" />
        </TouchableOpacity>
    ),
});
export default HomeScreen;
