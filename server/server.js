/* eslint-disable no-console */
require( 'dotenv' ).config();
const express = require( 'express' );
// Adding apollo server
const { ApolloServer } = require( 'apollo-server-express' );
const path = require( 'path' );
// Adding schema files and authMiddleware
const { typeDefs, resolvers } = require( './schema' );
const { authMiddleware } = require( './utils/auth' );

const db = require( './config/connection' );

const app = express();
const PORT = process.env.PORT || 3001;

// Define the server
const server = new ApolloServer( {
	typeDefs,
	resolvers,
	context: authMiddleware,
} );

// Adding the applyMiddleware line
server.applyMiddleware( { app } );

app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );

// if we're in production, serve client/build as static assets
if ( process.env.NODE_ENV === 'production' ) {
	app.use( express.static( path.join( __dirname, '../client/build' ) ) );
}

db.once( 'open', () => {
	app.listen( PORT, () => {
		console.log( `API server running on port ${PORT}!` );
		console.log( `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}` );
	} );
} );