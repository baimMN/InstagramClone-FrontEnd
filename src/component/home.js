
import React, {Component} from 'react';
import ImgWrap from './imgwrap.js'
import { Navigation } from 'react-native-navigation'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput,AsyncStorage} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header,Left, Body,Right,Footer} from 'native-base'
import {styles} from '../style.js'
import Icons from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconf from 'react-native-vector-icons/Feather'
import axios from 'axios'
import HomeData from './homedata.js'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import {graphql} from 'react-apollo'
import {gql} from 'apollo-boost'
import {connect} from 'react-redux'
import rootReducer from '../reducer/rootreducer.js'

 
// const query=gql`
//   mutation($caption:String,$_id:String!,$token:String!){
//     updatePost(caption:$caption,token:$token,_id:$_id){}
//   }
// `
// const ff=Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {
//   if(selectedTabIndex === 0){
//     Navigation.pop('Component5')
//   }
// });

const getPost=gql`
  {
    allPost{
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

class Home extends Component {
  state={
    loading:true,
    data:null,
    postData:[],
    usersData:[]
  }

  fetchAll=async()=> {
    this.setState({loading:true})
    await axios.get('http://192.168.0.11:3000/v1/users')
    .then((res) => {
      this.setState({usersData:res.data,loading:false})
    })
    .catch(err => alert(err))

    this.setState({postData:this.props.data.allPost})
  }

  async componentDidMount(){
    this.fetchAll()
  }

  componentDidUpdate(prevProps){
    if(this.props.data.allPost){
      this.setState({postData:this.props.data.allPost})
    }
  }

  render() {
    console.log('test gasga',this.state.postData)
    if(!this.state.loading && !this.props.data.loading){ 
      return (
        <React.Fragment>
          <Header style={styles.header} >
            <Left style={{flex: 2,flexDirection: 'row',alignItems:'center'}}>
              <Icons name='camerao' size={30} />
              <Image source={require('../image/logoText.png')} style={{height: 45,width: 120}} />
            </Left>
            <Right style={{flex: 2,flexDirection: 'row',alignItems:'center'}}>
              <Image source={require('../icon/tv.png')} style={{width: 28,height: 28,marginRight: 10}}/>
              <TouchableHighlight onPress={this.cekk}>
                <Icon name='paper-plane' size={27} /> 
              </TouchableHighlight>
            </Right>
          </Header>

          <Content>
            <ScrollView style={{borderBottomWidth: 0.3,borderBottomColor: 'grey'}} contentContainerStyle={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <TouchableHighlight>
                  <ImgWrap type='nasdew' src={require('../image/elon.jpg')} />
                </TouchableHighlight>
                <Text style={{alignSelf:'center',fontSize:11,marginLeft: -10,marginTop: 2}}>Eldn</Text>
              </View>
              { this.state.usersData.map((data,index) => ( 
                  <View key={index}>
                    <TouchableHighlight>
                      <ImgWrap type='new' src={require('../image/elon.jpg')} />
                    </TouchableHighlight>
                    <Text style={{alignSelf:'center',fontSize:11,marginLeft: -10,marginTop: 2}}>Eldn</Text>
                  </View> 
              ))}
            </ScrollView>
            
            <View style={{flex:1,}}>
              <FlatList keyExtractor={(item,index) => item.id} data={this.state.postData} renderItem={ ({item}) => <HomeData item={item}/> } />
            </View>
          </Content>
        </React.Fragment>
      );
    }
    else {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',fontSize:70}}><Text>Loading..</Text></View>
      )
    }
  }
} 

export default graphql(getPost)(Home)

