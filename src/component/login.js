import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import LogoText from './logoText.png'
import { Col, Row, Grid } from 'react-native-easy-grid'
import fb from './fb.png'
import axios from 'axios'
import {gql} from 'apollo-boost'
import {graphql,compose,Query,ApolloConsumer} from 'react-apollo'
import {TextInput,Image,View,AsyncStorage} from 'react-native'
import { Container,Body, Content, CardItem,Button, Form, Item, Input, Card, Header, Footer, Text, Thumbnail, Icon } from 'native-base'

const LOGIN_DATA=gql`
	query($email:String,$password:String){
		login(email:$email,password:$password){
			token,
			_id,
			name,
			email,
			picture,
			status,
			msg,
		}
	}
	
`

class Login extends Component {
	constructor(){
		super()
		this.state={
			itemFocus:{
				backgroundColor: 'white'
			},
			email:'',
			password:'',
			dataAll:[],
			fixEmail:'asasd',
			fixPassword:'asdad'
		}
	}

	styles={
		form:{
			width: '80%',
			marginTop: 10,
		},
		item:{
			backgroundColor: '#f2f2f2',
		}
	}		

	changeText=(text,type)=> {
		if(type === 'email'){
			this.setState({email:text})
		}else{
			this.setState({password:text})
		}
	}

	logout=()=> {
		Navigation.setRoot({
			root:{
				component:{
					name:'login'
				}
			}
		})
	}

	login=()=>{
		console.log('coba state',this.state.email)
		const {password,email}=this.state
		console.log('ini login test ya')
		// this.props.email=email
		// this.props.password=password
		// this.props.login.variables={
		// 	email,
		// 	password
		// }
		// this.props.login.refetch()
		// this.setState({fixEmail:email,fixPassword:password})
		// this.props.login.refetch({
		// 		email,
		// 		password
		// })
	}

	succesLogin = async ({email,name,_id,token}) => {
		// const {token,name,email,picture,_id}=data
		console.log('ini data di name',name)
		console.log('ini data di _id',_id)
		console.log('ini data di token',token)
		console.log('ini data di email',email)
		await AsyncStorage.setItem('_id',_id)
		await AsyncStorage.setItem('token',token)
		await AsyncStorage.setItem('name',name)
		await AsyncStorage.setItem('email',email)
		Navigation.setRoot({
			root:{
				bottomTabs:{
					children:[
						{	
							stack:{
								children:[
									{
										component:{
											id:'home',
											name:'home',
											options:{
												animations:{
													push:{
														enabled:false
													}
												}
											}	
										}
									}
								],
								options:{
									topBar:{
										visible:false
									},
									bottomTab:{
										text:'asd',
										icon: require('../icon/home-outline.png')		
									},
								}
							}
						},
						{
							component:{
								id:'addPost',
								name:'addPost',
								options:{
									bottomTab:{
										text:'asd',
										icon: require('../icon/plus-square-outline.png')
									}
								}
							}
						},
						{
							component:{
								name:'tesss',
								options:{
									bottomTab:{
										text:'asd',
										icon: require('../icon/heart-outline.png')
									}
								}
							}
						},
						{
							sideMenu:{
								left:{
									component:{
										name:'tess'
									}
								},
								center:{
									component:{
										id:'profile',
										name:'profile',
										options:{
											bottomTab:{
												text:'asd',
												icon: require('../icon/person-outline.png')
											}
										}
										
									}
								},
								right:{
									component:{
										id:'sideMenu',
										name:'sideMenu',
										options:{
											sideMenu:{
												left:{
													visible:true
												},
												right:{
													color:'transparent',
													backgroundColor:'transparent',
													background:'transparent'
												}
											},
										}									
									}
								}
							}
						}
					],
					options:{
						bottomTabs:{
							animate:false,
							titleDisplayMode:'alwaysHide',
							drawBehind: true
						}
					}
				}
			}
		})	
	}
	

    render() {
    	console.log("hai ini props",this.props)
        return (
            <Container>
				<Grid>
					<Row style={{justifyContent:'center',height: 110,marginTop: 40}}>
		    			<Image style={{height: 100, width:'60%'}} source={LogoText}/>
		    		</Row>

	    			<Row style={{marginTop: -20}}>
	    				<Col>
					    	<Row style={{height: 200}}>
					    		<Form style={{width: '100%',alignItems:'center'}}>
									<Item regular style={this.styles.form}>
										<Input onChangeText={(text) => {this.changeText(text,'email')}} placeholder="Phone number,userssname, or email" style={this.styles.item} />
									</Item>
									<Item regular style={this.styles.form}>
										<Input onChangeText={(text) => {this.changeText(text,'pw')}} placeholder="password" style={this.styles.item}/>
									</Item>
									<ApolloConsumer>
										{(client) => (
											<Button 
												onPress={ async () => {
													const {email,password}=this.state
													const {data} = await client.query({
														query: LOGIN_DATA ,
														variables:{email,password}
													})
													console.log(data.login)
													if(data.login.status === 403) alert('salah password')
													if(data.login.status === 200) this.succesLogin(data.login)
												}} 
												block 
												style={{alignSelf:'center',marginTop: 20,width: '80%',backgroundColor: '#4c90ff'}}
											>
												<Text>Sign In</Text>
											</Button>
										)}
									</ApolloConsumer>
								</Form>
							</Row>

							<Row style={{justifyContent:'center',height: 30,marginTop: 10}}>
								<Col style={{alignItems:'center'}}>
									<Row style={{borderTopWidth: 1,borderStyle: 'solid',width: '80%'}}></Row>
									<Row style={{backgroundColor: 'white',marginTop: -50,width: 40,justifyContent:'center'}}>
										<Text>OR</Text>
									</Row>
								</Col>
							</Row>

							<Row style={{justifyContent:'center',height: 30}}>
								<Image source={fb} style={{width: '10%',height: 40}}/>
								<Text style={{marginTop: 7}}>Login with facebook</Text>
							</Row>

							<Row style={{height: 30,marginTop: 30,justifyContent: 'center' }}>
								<Text>Forgot Password</Text>
							</Row>

						</Col>
					</Row>

					<Row style={{backgroundColor: '#edf0f4',height: 20}}></Row>

					<Row style={{justifyContent:'center',height: 80,borderTopWidth: 0.4,borderStyle:'solid'}}>
						<Text style={{alignSelf:'center'}}>Dont have an account? Sigssn up</Text>
					</Row>
				</Grid>
	    	</Container>
        )
    }
}

export default Login
