import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import LogoText from './logoText.png'
import { Col, Row, Grid } from 'react-native-easy-grid'
import fb from './fb.png'
import axios from 'axios'
import {TextInput,Image,View,AsyncStorage} from 'react-native'
import { Container,Body, Content, CardItem,Button, Form, Item, Input, Card, Header, Footer, Text, Thumbnail, Icon } from 'native-base'

class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			itemFocus:{
				backgroundColor: 'white'
			},
			email:'',
			password:'',
			dataAll:[]
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

	login=()=>{
		console.log('coba state',this.state.email)
		const {password,email}=this.state
		axios({
			method: 'post',
			url: 'http://192.168.0.11:3000/v1/login',
			data:{"password":""+password+"","email":""+email+""}
		  // responseType: 'stream'
		})
		.then(async (res)=> {
			if(!res.data){alert('salah pw')}
			else {
				const {_id,token}=res.data
				await AsyncStorage.multiSet([['userToken',token],['userToken',res.data.token]])
				Navigation.setRoot({
					root:{
						bottomTabs:{
							children:[
								{	
									stack:{
										children:[
											{
												component:{
													id:'app',
													name:'app',
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
		})
		.catch((err)=>{
			alert(err)
		})
	}
	
    render() {
    	console.log(this.state.email)
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
									<Button onPress={this.login} block style={{alignSelf:'center',marginTop: 20,width: '80%',backgroundColor: '#4c90ff'}}>
										<Text>Sign In</Text>
									</Button>
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
