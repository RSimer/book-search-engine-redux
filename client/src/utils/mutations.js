import { gql } from '@apollo/client';
// like writing routes
export const LOGIN_USER = gql`
  mutation loginUser($name: String!, $email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      username{_id,name}
      
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      username{_id,name}
      
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        title
        description
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook( $bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      name
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
     
    }
  }
`;