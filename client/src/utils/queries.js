import { gql } from '@apollo/client';


// put in username, email, saved books (bookId, authors, image, link, description, title), 
export const GET_ME = gql`
  query me {
    me {
    id
   username
   email
   bookCount
   savedBooks {
      bookId
       authors
       description
       title
       image
      link
        }
        }
    }
`;