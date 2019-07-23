import {gql} from 'apollo-boost'

export const POST_DATA=gql`
  {
    allPost {
      _id
      ownerId
      owner{
        name
        _id
        email
      }
      picture
      caption
      love
      dislove
    }
  }
`
export const USERS=gql`
  {
    users {
      _id
      name
      picture
      email
    }
  }
`