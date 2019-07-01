import React, { Component } from 'react';
import {View,Text} from 'react-native'
import {Navigation} from 'react-native-navigation'

class Tesss extends Component {
    yy=()=>{
    	console.log("asds")
    }
    render() {
        return (
            <View style={{marginTop: 100}}>
            	<Text onPress={this.yy}>ni tigaadasdaa</Text>
            	<Text onPress={this.yy}>popppppp</Text>
            </View>
        );
    }
}

export default Tesss;
