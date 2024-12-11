// int, float, string, boolean, ID

export const typeDefs = `#graphql 
 type Game{
  id:ID!
  title:string!
  platform:[String!]!
 }
 type Review{
  id:ID!
  rating:int!
  content:string!
 }
 type Author {
  id:ID!
  name:string!
  verified:Boolean!
 }
 type Query {
  reviews:[Reviews]
  games:[Game]
  authors:[Author]
 }


`