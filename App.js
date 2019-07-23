
import React, {Component} from 'react';
import rootReducer from './src/reducer/rootreducer'
import Main from './main.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ApolloClient from 'apollo-boost'
import { AppRegistry } from 'react-native';
import {ApolloProvider,createNetworkInterface} from 'react-apollo'

class App extends Component {

  store= createStore(rootReducer)

  client= new ApolloClient({
  	uri:'http://192.168.1.108:3000/graphql'
  })

  render() {
    return (
      <Main/>
    );
  }
} 

export default App