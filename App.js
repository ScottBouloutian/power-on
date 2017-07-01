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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import InfoScreen from './src/InfoScreen';
import DeviceScreen from './src/DeviceScreen';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});

const Navigator = StackNavigator({
    Home: { screen: HomeScreen },
    Info: { screen: InfoScreen },
    Device: { screen: DeviceScreen },
});

const App = () => (
    <View style={styles.container}>
        <Navigator />
    </View>
);
export default App;
