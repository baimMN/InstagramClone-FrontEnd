import React, { Component} from 'react';
import { Navigation } from 'react-native-navigation'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Container,Text,Content,Header,Left, Body,Right,Footer,Button} from 'native-base'
import Icons from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconf from 'react-native-vector-icons/Feather'
import axios from 'axios'
import {Query,ApolloConsumer,Mutation} from 'react-apollo'
import {gql} from 'apollo-boost'
import * as mutation from '../graphQL/mutations'
import HomeData from './homedata.js'
import Iconm from 'react-native-vector-icons/MaterialIcons'

const ADD_POST= gql`
    mutation($token:String!,$ownerId:String,$caption:String,$picture:String){
        addPost(token:$token,ownerId:$ownerId,picture:$picture,caption:$caption){
            _id
            caption
        }
    }
`
const POST_DATA=gql`
  {
    allPost {
      _id
      ownerId
      owner{
        name
        _id
        email
      }
      picture
      caption
      love
      dislove
    }
  }
`

class AddPost extends Component {

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

    addPost = () => { 
        // <Query
        //     query={ADD_POST}
        //     notifyOnNetworkStatusChange
        // >
        //     {
        //         ({ loading, error, data, refetch, networkStatus }) => {
        //             if(networkStatus === 7) return alert('succes add post')
        //             if(networkStatus === 8) return alert('gagal add post')
        //         }
        //     }
        // </Query>

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
                <Mutation
                    mutation={ADD_POST} 
                >
                    { (sendData,{data}) => (
        				<Button
                            block 
                            light 
                            onPress={async() => {
                                const token = await AsyncStorage.getItem('token')
                                const ownerId = await AsyncStorage.getItem('ownerId')
                                sendData({
                                    variables:{
                                        ownerId,
                                        token,
                                        caption:this.state.captionVal,
                                        picture:this.state.imageVal
                                    },
                                    refetchQueries:[{query:POST_DATA}]
                                })
                            }}
                        >
        					<Text>test</Text>
        				</Button>
                    )}
                </Mutation> 
			</View>
        );
    }
}

export default AddPost;
