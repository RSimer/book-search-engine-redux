import { gql } from '@apollo/client';


// put in username, email, saved books (bookId, authors, image, link, description, title), 
export const GET_ME = gql`
  query UserBooks {
    profiles {
      bookId,
      authors,
      image,
      link,
      description,
      title
    }
  }
`;