import React from 'react'

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const defaultClient= new ApolloClient({
	uri:'http://192.168.0.13:3000/graphql'
})

const withProvider = (Component, client = defaultClient) => {
  return class extends React.Component {
  	constructor(){
  		super()
  	}
    render () {
      return (
        <ApolloProvider client={client}>
          <Component {...this.props} />
        </ApolloProvider>
      )
    }
  }
}

export default withProvider