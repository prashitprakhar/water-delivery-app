import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppHeader } from './components/common'

class App extends Component {
    render() {
        return (
        <View>
            <AppHeader headerText='HouseHold'/>
            <Text>House Hold Login/Sign-up page</Text>
        </View>
        )
    }
}

//Hello for testing

export default App;