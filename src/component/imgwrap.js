import React,{Component} from 'react'
import {View,Image,Text} from 'react-native'
import { Navigation } from 'react-native-navigation'
import Icons from 'react-native-vector-icons/AntDesign'

function ImgWrap(props){
	const {size,bc,mr,mt,plusLogo,type,press} = props
	const marginRight=mr ? mr : 0
	const width=size ? size : 67
	const marginTop= mt ? mt : 0 
	const borderColor=bc ? bc : 'red'

	const Comp= () => {return (
		<View style={{width: '100%',height: '100%',borderRadius: 40,overflow: 'hidden'}}>
			<Image source={props.src} style={{width: '110%',height: '110%'}} />
		</View>
	)}

	const Plus=()=> {
		return (
			<Icons name="pluscircle" size={20} style={{color: '#609af7',backgroundColor: 'white',borderRadius: 20,position: 'absolute',top: '70%',left: '75%'}} />
		)
	}

	if(type === "new")
	{ return (
		<View  style={{width: 70,marginRight:10,padding:1.5,height: 70,borderColor: 'red',borderWidth: 1,borderRadius: 40}}>
        	<View style={{width: '100%',height: '100%',borderRadius: 40,overflow: 'hidden'}} onPress={()=> {alert('adasdasda')}}>
				<Image source={props.src} style={{width: '110%',height: '110%',zIndex: -1}} />
			</View>
        </View>
	)}
	else if(type === "newSmall"){
		return (
			<View style={{width: 50,marginRight:10,padding:1.5,height: 50,borderColor: 'red',borderWidth: 1,borderRadius: 40}}>
	          <Comp />
	        </View>
		)
	}
	else if(type === "mine"){
		return (
			<View style={{width: 45,height: 45,marginTop: 7}}>
	          <Comp />
	        </View>
		)
	}
	
	else if(type === "customBordered"){
		return (
			<View style={{width,marginRight,padding:1.5,height: width,borderColor,borderWidth: 1,borderRadius: 40}}>
	          <Comp />
			  {plusLogo && <Plus/>}
	        </View>	
		)
	}

	else if(type === "custom"){
		return (
			<View style={{marginRight,marginTop,width,height: size}}>
	        	<Comp />
	        	{plusLogo && <Plus/>}
	        </View>	
		)
	}

	else{return (
		<View style={{marginRight:10,marginTop: 4.5,width: 67,height: 67}}>
        	<Comp />
        	<Plus/>	
        </View>
    )}
}

export default ImgWrap