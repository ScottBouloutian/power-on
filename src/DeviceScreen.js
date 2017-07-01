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

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const macRegex = /^([0-9A-Fa-f]{2}:){5}([0-9A-Fa-f]{2})$/;
const styles = StyleSheet.create({
    view: {
        display: 'flex',
    },
    input: {
        textAlign: 'center',
        height: 40,
        backgroundColor: 'white',
    },
    label: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        margin: 8,
        borderRadius: 4,
    },
    headerButton: {
        margin: 16,
    },
});

class DeviceScreen extends Component {
    constructor() {
        super();
        this.state = {
            nameValid: false,
            macValid: false,
            nameText: '',
            macText: '',
        };
    }

    nameChanged(text) {
        const { macValid } = this.state;
        const { navigation } = this.props;
        const nameValid = (text.length > 0);
        this.setState({
            nameText: text,
            nameValid,
        });
        navigation.setParams({
            canSave: nameValid && macValid,
        });
    }

    macChanged(text) {
        const { nameValid } = this.state;
        const { navigation } = this.props;
        const macValid = macRegex.test(text);
        this.setState({
            macText: text,
            macValid,
        });
        navigation.setParams({
            canSave: nameValid && macValid,
        });
    }

    render() {
        const { nameValid, macValid, nameText, macText } = this.state;
        const validStyle = valid => ({
            backgroundColor: valid ? '#2ecc71' : '#e74c3c',
        });
        return (
            <View style={styles.view}>
                <View style={styles.label}>
                    <Text>Device Name</Text>
                    <View style={[styles.dot, validStyle(nameValid)]} />
                </View>
                <TextInput
                  id="name-input"
                  style={styles.input}
                  placeholder="My Device"
                  autoCorrect={false}
                  value={nameText}
                  onChangeText={text => this.nameChanged(text)}
                />
                <View style={styles.label}>
                    <Text>Media Access Control Address (MAC Address)</Text>
                    <View style={[styles.dot, validStyle(macValid)]} />
                </View>
                <TextInput
                  id="mac-input"
                  style={styles.input}
                  placeholder="00:00:00:00:00:00"
                  autoCorrect={false}
                  value={macText}
                  maxLength={17}
                  onChangeText={text => this.macChanged(text)}
                />
            </View>
        );
    }
}

DeviceScreen.navigationOptions = ({ navigation }) => {
    const defaultParams = {
        canSave: false,
    };
    const params = navigation.state.params || defaultParams;
    const canSave = params.canSave;
    const color = canSave ? '#c0392b' : '#bdc3c7';
    return {
        title: 'Add Device',
        headerTintColor: '#c0392b',
        headerRight: (
            <TouchableOpacity style={styles.headerButton} disabled={!canSave} onPress={() => {}}>
                <Icon name="floppy-o" size={18} color={color} />
            </TouchableOpacity>
        ),
    };
};

DeviceScreen.propTypes = {
    navigation: PropTypes.shape({
        setParams: PropTypes.func.isRequired,
    }).isRequired,
};

export default DeviceScreen;
