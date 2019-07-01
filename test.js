import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'
import {Navigation} from 'react-native-navigation'
import Iconn from 'react-native-vector-icons/Entypo'

class Tes extends Component {
    tee=()=>{
        Navigation.push(this.props.componentId,{
            component:{
                name:'tesss'   
            }
        })
    }

    render() {
        return (<Iconn name='dots-three-horizontal' size={27} />)
    }
}

export default Tes;



