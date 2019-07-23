import {gql} from 'apollo-boost'

export const ADD_POST= gql`
    mutation($token:String!,$ownerId:String,$caption:String,$picture:String){
        addPost(token:$token,ownerId:$ownerId,picture:$picture,caption:$caption){
            _id
            caption
        }
    }
`