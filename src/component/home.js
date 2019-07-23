
import React, {Component} from 'react';
import ImgWrap from './imgwrap.js'
import { Navigation } from 'react-native-navigation'
import { View,Image,ScrollView,FlatList,TouchableHighlight,TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
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
import {graphql,compose,Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import * as query from '../graphQL/mutations'
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
const USERS=gql`
  {
    users {
      _id
      name
      picture
      email
    }
  }
`
class Home extends Component {
  constructor(){
    super()
    this.state={
      loading:false,
      data:null,
      postData:[],
      usersData:[]
    }
  }

  // fetchAll=async()=> {
  //   this.setState({loading:true})
  //   axios.get('http://192.168.1.108:3000/v1/users')
  //   .then((res) => {
  //     this.setState({usersData:res.data,loading:false})
  //   })
  //   .catch(err => alert(err))

  //   this.setState({postData:this.props.data.allPost})
  // }

  // componentDidMount(){
  //   // this.fetchAll()
  // }

  render() {
    console.log('inin render home aja')
    if(!this.state.loading){ 
      return (
        <Container>
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

              <Query
                query={USERS}
                notifyOnNetworkStatusChange
              >
                {
                  ({loading, error, data, refetch, networkStatus}) => {
                    if(networkStatus === 7){
                      return (
                        data.users.map((datsa,index) => ( 
                          <View key={index}>
                            <TouchableHighlight>
                              <ImgWrap type='new' src={require('../image/elon.jpg')} />
                            </TouchableHighlight>
                            <Text style={{alignSelf:'center',fontSize:11,marginLeft: -10,marginTop: 2}}>Eldn</Text>
                          </View> 
                        ))
                      )
                    }if(networkStatus === 1){
                      return (
                        [1,2,3,4,5].map((datsa,index) => ( 
                          <View key={index}>
                            <TouchableHighlight>
                              <ImgWrap type='new' src={require('../image/bill.jpg')} />
                            </TouchableHighlight>
                            <Text style={{alignSelf:'center',fontSize:11,marginLeft: -10,marginTop: 2}}>Eldn</Text>
                          </View> 
                        ))
                      )
                    }else {
                      return (<Text>Ada kesalahan</Text>)
                    }
                  }
                }
              </Query>
            </ScrollView>
            
            <View style={{flex:1}}>
              <Query
                query={POST_DATA}
                notifyOnNetworkStatusChange
              > 
                {
                  ({ loading, error, data, refetch, networkStatus}) => {
                    if(networkStatus === 1) {
                      return (<Text>Loading..</Text>)
                    }

                    if(networkStatus === 7) {
                      console.log(data)
                      return (
                        <FlatList style={{marginBottom:80}} data={data.allPost} renderItem={ ({item}) => <HomeData item={item}/> } />
                      )
                    }
                  }
                }
              </Query>
            </View>
          </Content>
        </Container>
      );
    }
    else {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',fontSize:70}}><Text>Loading..</Text></View>
      )
    }
  }
} 

// export default compose(
//   graphql(getPost,{name:"getPost"}),
//   graphql(users,{name:"users"})
// )(Home)
export default Home
// export dafault graphql(getPost)(Home)
// export default graphql(getPost)(Home)
