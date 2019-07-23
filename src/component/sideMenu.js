
import React, {Component} from 'react'
import {Content,Container} from 'native-base'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ApolloClient from 'apollo-boost'
import {View,Text} from 'react-native';

class SideMenu extends Component {

  render() {
    return (
    	<Container>
			<Content>
				<View style={{flex:1,width:'100%'}}>
					<View style={{flex:7,width:'100%'}}>
						<Text>Logout</Text>
					</View>
					<View style={{flex:1,width:'100%'}}>
						<Text>Logout</Text>
					</View>
				</View>
			</Content>		
	    </Container>
    )
  }
} 

export default SideMenu