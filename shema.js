// Int, float, string, boolean, ID

export const typeDefs = `#graphql 
 type Game{
  id:ID!
  title:String!
  platform:[String!]!

  reviews:[Review!]
  # []の外に!がないのはgameに必ずしもreviewがあるわけではないから
 }
 type Review{
  id:ID!
  rating:Int!
  content:String!

  game:Game!,
  author:Author!,
 }
 type Author {
  id:ID!
  name:String!
  verified:Boolean!

  reviews:[Review!]
    # []の外に!がないのはauthorに必ずしもreviewがあるわけではないから
 }
 type Query {
  reviews:[Review]
  review(id:ID!):Review
  games:[Game]
  game(id:ID!):Game
  authors:[Author]
  author(id:ID!):Author
 }

 type Mutation {
  deleteGame(id:ID!):[Game]

  addGame(game:AddGameInput!):Game

  updateGame(id:ID!, game:EditGameInput):Game
 }
 input AddGameInput{
  title:String!,
  platform:[String!]!
 }
 input EditGameInput{
  title:String,
  platform:[String!]
 }


`