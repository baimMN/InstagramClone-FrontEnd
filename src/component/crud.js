import React, {Component} from 'react'
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import axios from 'axios'

class Crud extends Component {

	state={
		todos:'',
		text:''
	}

	componentDidMount(){
		this.fetchAll()
	}


	fetchAll=()=> {
		axios.get('http://127.0.0.1:3000/todos')
		.then(resp => {
			alert(resp.data)
		})
		.catch(err => {alert(err)})
	}

	
    render() {
    	console.log()
        return (
        	<View style={{flex:1}}>
	            <View style={{flex:4}}>
	            	
	            </View>

	            <View style={{flex:1,justifyContent:'flex-end'}}>
	            	<TextInput placeholder="Tambah aktivitas" onChangeText={(text)=> {this.setState({text})} } style={{flex:1}}/>
	            	<TouchableHighlight style={{flex:1}}>
	            		<Text>Addddd</Text>
	            	</TouchableHighlight>
	            </View>
            </View>
        );
    }
}

export default Crud
