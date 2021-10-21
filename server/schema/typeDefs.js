const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Query{
        me: User
    }

    type User {
        _id: ID!
        username: String!
        email: String
        password: String!
        bookcount: Int
        savedBook: [Book]
    }

    type Book{
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String! 
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String
        image: String
        link: String
        title: String!

    }
    type Auth{
        token: ID!
        user: User
    }
    type Mutation{
        addUser(username: String, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth


        saveBook(bookData: BookInput!): User
        RemoveBook(bookId: ID!): User
        
    }

`;

module.exports = typeDefs;