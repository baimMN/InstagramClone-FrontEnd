
import { Navigation } from 'react-native-navigation'
import React from 'react'
import App from './App';
import Login from './src/component/login.js'
import Tes from './test.js'
import Tess from './test2.js'
import Edit from './src/component/edit.js'
import Tesss from './test3.js'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import EditMenu from './src/component/editMenu.js'
import Profile from './src/component/profile.js'
import Home from './src/component/home.js'
import Crud from './src/component/crud.js'
import AddPost from './src/component/addPost.js'
client= new ApolloClient({
	uri:'http:// 192.168.1.111:3000/graphql'
})

Navigation.registerComponent(`login`, () => Login);
Navigation.registerComponent(`app`, () => App);
Navigation.registerComponent(`home`, () => Home);
Navigation.registerComponent(`tes`, () => Tes);
Navigation.registerComponent(`tess`, () => Tess);
Navigation.registerComponent(`tesss`, () => Tesss);
Navigation.registerComponent(`addPost`, () => AddPost);
Navigation.registerComponent(`ApolloProvider`, () => ApolloProvider);
Navigation.registerComponent(`crud`, () => Crud);
Navigation.registerComponent(`edit`,()=> Edit);
Navigation.registerComponent(`profile`, () => Profile);
Navigation.registerComponent(`editMenu`, () => EditMenu);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root:{
			component:{
				name:'login',
			}
		}
	})
})
console.ignoredYellowBox = ['Warning:']
// delete=(_id)=> {
// 		axios('http://192.168.1.134:3000/ig/login',{
// 			method:'delete',
// 			header:{},
// 			data:JSON.stringify({_id})
// 		})
// 	}	

// addPost=(picture,ownerId,caption)=> {
// 		axios('http://192.168.137.1/ig/login',{
// 			method:'post',
// 			header:{},
// 			data:JSON.stringify({picture,ownerId,caption})
// 		})	
// 	}

// 	componentDidMount(){
// 		axios.get('http://192.168.1.134:3000/ig/users')
// 		.then(res => {this.setState({dataAll:res.data})})
// 	}