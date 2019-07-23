import React, {Component} from 'react';
import ImgWrap from './imgwrap.js'
import { View,Image,ScrollView,TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer } from 'native-base'
import {styles} from '../style.js'
import Icons from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/EvilIcons'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Modal from "react-native-modal"
import {connect} from 'react-redux'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import { validate } from '@babel/types';

class HomeData  extends Component{
    constructor(){
      super()
      this.state={
        showModal:false
      }
    }

    editTab=(_id,ownerId) => {
      Navigation.push('app',{
        component:{
          id:'editMenu',
          name:'editMenu',
          passProps:{
            _idPost:_id,
            ownerId
          },
          options:{
            bottomTabs:{
              visible: false
            }
          }
        }
      })
    }

    // const deleteTab=(_id) => {
    //   axios({
    //     method:'delete',
    //     url:'http://192.168.0.11:3000/v1/deletePost',
    //     headers:{},
    //     data:{
    //       _id:props.item._id
    //     }
    //   })
    //   .then(res => {
    //     alert('berhasil hapus')
    //   })
    // }
    // console.log(props)

    // const CheckUser=(props)=> {
      
    // }
    render() {
      console.log('inin render homedata')
      return (
          <View style={{flex:1,marginTop: 7}}>

            <Modal 
              isVisible={this.state.showModal} 
              onBackdropPress={() => this.setState(prev => ({showModal:!prev.showModal}))}
              animationIn='zoomIn'
              animationOut='zoomOut' 
            >
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.deleteTab(this.props.item._id)}>delete</Text>
                  </View>
                  <View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.editTab(this.props.item._id,this.props.item.ownerId)}>edit</Text>
                  </View>
                  <View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.editTab()}>test edit</Text>
                  </View>
                  <View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.editTab()}>test edit</Text>
                  </View><View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.editTab()}>test edit</Text>
                  </View>
                  <View  style={{padding:7,backgroundColor: '#f9f9f9',height: 37,width: '60%'}}>
                    <Text onPress={() => this.editTab()}>test edit</Text>
                  </View>
                </View>   
            </Modal>
            
            <View style={{flex:1,flexDirection: 'row',margin: 10,marginBottom: -3}}>
                <Left style={{flexDirection: 'row',}}>
                  <ImgWrap type='custom' size={40} mr={7} src={require('../image/elon.jpg')} />
                  <Text style={{fontSize:14,alignSelf:'center'}}>{this.props.item.owner.name}</Text>
                </Left>
                <Right>
                    <Iconn name='dots-three-horizontal' size={25} onPress={() => this.setState({showModal:true})}/>
                </Right>
            </View>

            <View style={{flex:1,margin: 10}}>
              <Image source={require('../image/saad.jpg')} style={{width: '106%',height: 320,marginLeft: -10}} />
              <View style={{flex:1,flexDirection: 'row'}}>
                <Left style={{flexDirection: 'row',}}>
                  <Icons size={25} name='hearto' style={{marginRight: 10}}/>
                  <Icone name='comment' size={33} />
                </Left>
                <Right>
                  <Iconm name='bookmark-border' size={30}/>
                </Right>
              </View>
            </View>

            <View style={{margin: 10,marginTop: -14}}>
              <Text style={{fontWeight:'bold'}}>34 Likes</Text>
              <View >
                <Text>
                  <Text style={{fontWeight:'bold'}}>{this.props.item.owner.name} &nbsp;</Text>
                  {this.props.item.caption}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <ImgWrap src={require('../image/bill.jpg')} type="custom" mt={5} size={35}  />
                <Text style={{fontSize:14,alignSelf:'center',fontWeight:'bold',color: '#d3d9e2',marginLeft: 10}}>Add a comment</Text>
              </View>

              <Text style={{fontSize: 10,color: '#93979e'}}>16 hours ago</Text>

            </View>
          </View>
      )
    }
}

export default HomeData
