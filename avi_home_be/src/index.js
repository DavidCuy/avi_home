dotenv = require('dotenv').config(); //Libreria para acceder a las variables del .env
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = importSchema('./src/schema.graphql');//Definimos constantes necesarias para GraphQL
const mongoose = require('mongoose'); //Paquete para MongoDB connector
const { AuthDirective } = require('./resolvers/directive');

/**
 * Conexion a mondo-db
 */
mongoose.connect(process.env.MONGOURI,
  {useNewUrlParser: true}, (err) => {
      if(!err){
          console.log('Conectado a Mongo exitosamente');
      }
      else{
          console.log('Error al conectar: ' + err);
      }
  }
);

const resolvers = {
  Query: {
  },
  Mutation: {
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
      auth: AuthDirective
  }
})

//Variable constante para el server de GraphQL
const server = new GraphQLServer({ 
  schema,
  context: async({request}) => request
})
server.start(() => console.log('Server is running on localhost:4000'))