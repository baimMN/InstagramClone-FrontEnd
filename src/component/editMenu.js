import React, { Component} from 'react'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput,AsyncStorage} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Container,Text,Content,Header, Left, Body,Right,Footer,Input } from 'native-base'
import Icone from 'react-native-vector-icons/EvilIcons'
import testImg from '../image/bill.jpg'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import ImgWrap from './imgwrap.js'
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
import axios from 'axios'

class EditMenu extends Component {
    state={
    	newCaption:''
    }

    close=()=> {
    	Navigation.pop('editMenu')
    }
    submitEdit=async()=> {
    	axios({
    		method:'post',
    		url:'http://192.168.0.20:3000/v1/updatePost',
    		headers:{
    			Authorization:`Bearer ${await AsyncStorage.getItem('userToken')}` 
    		},
    		data:{
    			caption:this.state.caption,
				_id: this.props._idPost
    		}
    	})
    	.then(res => {
    		if(res.data){alert('gagal upload')}		
    		else {
    			alert('edit berhasil')
    			this.close()
    		}
    	})
    	.catch(err => alert(err))
    }
    render() {
        return (
	        <Container>
				<View style={{flex: 1,width: '100%'}}> 
					<View style={{flex:2,width: '100%',borderColor: '#e3e9f2',borderWidth: 1.5,flexDirection:'row',alignItems:'center'}}>
						<Left style={{flexDirection:'row',marginLeft: 5}}>

							<Icone name='close' size={30} style={{}} onPress={this.close}/>
							<Text style={{marginLeft: 10}}>Edit Info</Text>
						</Left>
						<Right>
							<Iconm name='check' size={30} style={{marginRight: 5}} onPress={this.submitEdit}/>
						</Right>
					</View>

					<View style={{flex:2,width: '100%',justifyContent:'center',paddingLeft:10}}>
						<ImgWrap src={testImg} type='custom' size={37} />
					</View>

					<View style={{flex:12,width: '100%'}}>
						<View style={{flex:1,width: '100%',flexDirection:'row',alignItems:'center',position: 'absolute',zIndex: 2,bottom: 10}}>
							<Left style={{flexDirection:'row',marginLeft: 5}}>
								<Icone name='close' size={30} style={{}}/>
								<Text style={{marginLeft: 10}}>Edit Info</Text>
							</Left>
							<Right>
								<View style={{flexDirection:'row',marginRight: 10}}>
									<Icone name='close' size={30} style={{}}/>
									<Text style={{marginLeft: 10}}>Edit Info</Text>
								</View>
							</Right>
						</View>
						<Image source={testImg} style={{width:'100%',height:'100%'}}/>
					</View>

					<View style={{flex:9,width: '100%',paddingLeft:20,paddingRight:20}}>
						<TextInput onChangeText={(text) => {this.setState({newCaption:text})} } style={{borderBottomWidth: 0.3,borderBottomColor: '#000000'}}/>
					</View>
				</View>  
			</Container>
        )
    }
}

export default EditMenu;
