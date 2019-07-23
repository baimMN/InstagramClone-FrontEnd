
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
import withProvider from './src/component/withProvider'
import Home from './src/component/home.js'
import Crud from './src/component/crud.js'
import Mutation from './src/graphQL/mutations'
import Query from './src/graphQL/query'
import AddPost from './src/component/addPost.js'
import SideMenu from './src/component/sideMenu.js'
client= new ApolloClient({
	uri:'http://192.168.0.13:3000/graphql'
})

Navigation.registerComponent(`login`, () => withProvider(Login));
Navigation.registerComponent(`app`, () => withProvider(App));
Navigation.registerComponent(`home`, () => withProvider(Home));
Navigation.registerComponent(`tes`, () => withProvider(Tes));
Navigation.registerComponent(`sideMenu`, () => withProvider(SideMenu));
Navigation.registerComponent(`tess`, () => withProvider(Tess));
Navigation.registerComponent(`query`, () => withProvider(Query));
Navigation.registerComponent(`mutation`, () => withProvider(Mutation));
Navigation.registerComponent(`tesss`, () => withProvider(Tesss));
Navigation.registerComponent(`addPost`, () => withProvider(AddPost));
Navigation.registerComponent(`crud`, () => withProvider(Crud));
Navigation.registerComponent(`edit`,() => withProvider(Edit));
Navigation.registerComponent(`profile`, () => withProvider(Profile));
Navigation.registerComponent(`editMenu`, () => withProvider(EditMenu));

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