import React, { Component} from 'react'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput,Text} from 'react-native'
import { Navigation } from 'react-native-navigation'
import Modal from "react-native-modal"
import {connect} from 'react-redux'


class Edit extends Component {
	edit=() => {
		this.props.editPost(false)
		Navigation.push('app',{
			component:{
				id:'editMenu',
				name:'editMenu',
				options:{
					bottomTabs:{
						visible: false
					}
				}
			}
		})
	}

    render() {
        return (
			<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'rgba(58, 58, 58,0.5)'}}>
				<View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.close}>test edit</Text>
				</View>
				<View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.edit}>test edit</Text>
				</View>
				<View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.close}>test edit</Text>
				</View>
				<View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.close}>test edit</Text>
				</View><View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.close}>test edit</Text>
				</View>
				<View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
					<Text onPress={this.close}>test edit</Text>
				</View>
			</View>   
        )
    }
}

const dum=''
export default Edit;
