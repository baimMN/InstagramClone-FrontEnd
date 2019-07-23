
import React, {Component,useState,useEffect} from 'react';
import { View,Image,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer,Tab,Tabs,TabHeading, Button } from 'native-base'
import Icons from 'react-native-vector-icons/AntDesign'
import {styles} from '../style.js'
import ImgWrap from './imgwrap.js'
import Icone from 'react-native-vector-icons/EvilIcons'
import Iconi from 'react-native-vector-icons/Ionicons'
import TopProfile from './topprofile.js'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import Iconmm from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal"
import { Navigation } from 'react-native-navigation'
import Iconsi from 'react-native-vector-icons/SimpleLineIcons'
 
export default function Profile() {
  const [load,setLoad]=useState(false) 
  const [sideMenu,setSideMenu]=useState(false)
  
  useEffect(()=> {
    setTimeout(()=> {setLoad(true)})
  },[])

  const swipeMenu=(type)=> {
    Navigation.mergeOptions('sideMenu',{
      sideMenu:{
        right:{
          visible:true
        }
      }
    })
  }

  const logOut=()=> {
    swipeMenu('asd')
    Navigation.setRoot({
      root:{
        component:{
          name:'login',
        }
      }
    })
  }

  const cekStorage=async ()=> {

    return (
      <View>
        <Text>asd</Text>
        <Text>asd</Text>
      </View>
    )
  }
    {if(load){
    return ( 
    <React.Fragment>
      <Modal isVisible={sideMenu} animationIn="slideInRight" animationOut="slideOutRight">
        <View style={{flex:1}}>
          <View>
            <Button onPress={logOut}>LogoUt</Button>
          </View>
        </View>
      </Modal>
      <Header style={styles.profileHeader}>
        <Left style={{flex: 3,flexDirection: 'row'}}>
          <Text style={{marginRight: 4}}>Billl</Text>
          <Iconi name='ios-arrow-down' size={27}/>
        </Left>
        <Right style={{flex: 3,flexDirection: 'row'}}>
          <Icons name='clockcircleo' size={27} style={{marginRight: 10}} />
          <Iconsi name='menu' size={27} onPress={() => swipeMenu()} /> 
        </Right>
      </Header>
      <Content>
        <View>

          <TopProfile/>

          <View style={{marginTop: 10,margin: 10}}>
            <Text style={{fontSize: 15,fontWeight:'bold'}}>Bill</Text>
            <Text style={styles.profileSub}>Enterpreneur</Text>
            <Text>asddddddddddddddddddddddasdddddddddddddddd</Text>
          </View>

          <ScrollView contentContainerStyle={{marginTop: 15,marginLeft: 10,paddingBottom:5,borderBottomWidth: 3,borderBottomColor: '#ededed'}} horizontal={true} showsHorizontalScrollIndicator ={false}>
            { [1,2,3,5,5,6,7,5,6].map((data,index) => ( 
                <View key={index}>
                  <ImgWrap type='customBordered'  bc='red' mr={7} size={60} src={require('../image/elon.jpg')}  />
                </View> 
            ))}
          </ScrollView>

          <View style={{flex:1,marginTop: 5}}> 
              <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}} locked >
                <Tab  
                  heading={
                    <TabHeading style={{backgroundColor: '#f9f9f9'}}> 
                      <Iconmm name='table-large' size={30} color='grey'/>
                    </TabHeading>}
                >
                  <View style={{flex:1,flexDirection: 'row',marginRight: -2,flexWrap: 'wrap'}}>
                    {
                      [1,1,1,1,1,1,1,1,1,1,1,1].map((data,index)=> 
                        (
                          <Image source={require('../image/saad.jpg')} style={{width: '33%',marginRight: 1,marginTop: 1,height: 140,}} />
                        )
                      )
                    }
                  </View>  

                </Tab>
                <Tab heading={
                  <TabHeading style={{backgroundColor: '#f9f9f9'}} >
                    <Iconmm name='cellphone-android' size={30} color='grey'/>
                  </TabHeading>}
                >
                  <Text>adasd</Text>
                  {cekStorage()}
                </Tab>
                <Tab heading={
                  <TabHeading style={{backgroundColor: '#f9f9f9'}}>
                    <Iconsi name='people' size={30} color='grey' />
                  </TabHeading>}
                >
                  <Text>isiiiiiiiiiii</Text>
                </Tab>
              </Tabs>

          </View>
        </View>
        
      </Content>

    </React.Fragment>
    )}
    else {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',fontSize:70}}><Text>Loading..</Text></View>    
      )
    }
    
    }
  
} 