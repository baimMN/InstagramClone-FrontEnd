import React, {Component} from 'react';
import { View,Image,ScrollView} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer } from 'native-base'
import Icons from 'react-native-vector-icons/AntDesign'
import {styles} from '../style.js'
import ImgWrap from './imgwrap.js'
import Icone from 'react-native-vector-icons/EvilIcons'
import Iconi from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconm from 'react-native-vector-icons/MaterialIcons'

function TopProfile(){  
  return(
    <View style={{flex: 1,flexDirection: 'row',alignItems:'center',margin: 10}}>
      <View>
        <ImgWrap src={require('../image/bill.jpg')} type="customBordered" size={80} mr={15}/>
      </View>

      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection: 'row',justifyContent:'space-around'}}>

            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}>3</Text>
              <Text style={styles.profileSub}>post</Text>                  
            </View>  

            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}>102</Text>
              <Text style={styles.profileSub}>followers</Text>
            </View>

            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontWeight:'bold'}}>123</Text>
              <Text style={styles.profileSub}>following</Text>
            </View>

          </View>
        </View>

        <View style={{marginTop: 2,alignItems:'center',width: '97%',borderWidth: 0.5,borderColor: 'grey',borderRadius: 5,padding:5,alignSelf:'center'}}>
          <Text>Edit Profil</Text>
        </View>
      </View>

    </View>
  )
}

export default TopProfile