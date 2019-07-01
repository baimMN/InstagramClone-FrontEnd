import React, { Component} from 'react';
import { Navigation } from 'react-native-navigation'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput,AsyncStorage} from 'react-native';
import { Container,Text,Content,Header,Left, Body,Right,Footer,Button} from 'native-base'
import Icons from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconf from 'react-native-vector-icons/Feather'
import axios from 'axios'
import HomeData from './homedata.js'
import Iconm from 'react-native-vector-icons/MaterialIcons'


class addPost extends Component {

    constructor(props) {
        super(props);
        this.state={
        	captionVal:'',
        	imageVal:''
        }
    }

    onChange(text,type){
    	type === 'image' ? this.setState({imageVal:text}) : this.setState({captionVal:text}) 
    }

    post=async ()=> {
    	const userId= await AsyncStorage.getItem('userId')
    	const userToken=await AsyncStorage.getItem('userToken')
    	axios({
    		method:'post',
    		url:'http://192.168.0.11:3000/v1/addPost',
    		headers:{},
    		data:{
    			"picture":""+ this.state.imageVal +"",
    			"caption":""+ this.state.captionVal +"",
    			"ownerId":""+ userId +"",
    			"token":""+ userToken +""
    		}
    	})
    	.then(res => {
    		alert('berhasil upload')
    	})
    	.catch(err => alert(err))
    }

    render() {
        return (
		 	<View style={{flex:1}}>
				<View style={{width: '100%',textAlign:'center'}}>
					<TextInput placeholder='image'  onChangeText={(text) => this.onChange(text,'image')}/>
				</View>
				<View style={{width: '100%',textAlign:'center'}}>
					<TextInput placeholder='caption'  onChangeText={(text) => this.onChange(text,'asd')}/>
				</View>
				<Button block light onPress={this.post}>
					<Text>test</Text>
				</Button>
			</View>
        );
    }
}

export default addPost;
