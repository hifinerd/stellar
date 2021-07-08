//Lines 2 to 18 is common code shared between all files in the screens folder, with the only change between them being the <Text> component in line 14, and the class name.
import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home Screen</Text>
                </View>
        )
    }
}