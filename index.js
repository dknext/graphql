
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./shema.js";

import db from "./_db.js"
const resolvers = {
  Query:{
    games(){
      return db.games
    },
    game(_, args){
      return db.games.find(game => game.id === args.id)
    },
    authors(){
      return db.authors
    },
    author(_,args){
      return db.authors.find(author => author.id === args.id)
    },
    reviews(){
      return db.reviews
    },
    review(_,args){
      return db.reviews.find(review => review.id === args.id)
    }
  }, 
  Game:{
    reviews(parent){
      return db.reviews.filter(review => review.game_id === parent.id)
    }
  },
  Author:{
    reviews(parent){
      return db.reviews.filter(review => review.author_id === parent.id )
    }
  }, 
  Review:{
    author(parent){
      return db.authors.find(author => author.id === parent.author_id)
    },
    game(parent){
      return db.games.find(game => game.id === parent.game_id)
    }
  },
  Mutation:{
    deleteGame(_,args){
      return db.games.filter(game => game.id !== args.id)
    },
    addGame(_,args){
      let game = {
        ...args.game,
        id:Math.floor(Math.random() *1000)
      }
      db.games.push(game)
      return game
    },
    updateGame(_,args){
      db.games = db.games.map(game => {
        if(game.id === args.id){
          return {...game, ...args.game}
        }
        return game
      })
      return db.games.find(game => game.id === args.id)
    }
  }
}



// server setup
const server = new ApolloServer({
  // typeDefs→definitions of types of data
  typeDefs,
  // resolvers→
  resolvers,
})


const {url} = await startStandaloneServer(server, {
  listen:{port:4000}
})

console.log("Server ready at port", 4000)



// Frontendからのquery
// 例1
// query ExampleQuery($id:ID!) {
//   review(id:$id){
//    rating
//   }
// }
// variablesの欄で
// {
//   "id":"1"
// }
// 例2
// query ExampleQuery($id:ID!) {
//   game(id:$id){
//      title
//      reviews {
//         rating,
//         content
//      }
//   }
// }
// 例3
// query ExampleQuery($id:ID!) {
//   author(id:$id){
//       name
//      reviews {
//         rating,
//         content,
        
//      }
//   }
// }
// 例4
// query ExampleQuery($id:ID!) {
//   review(id:$id){
//      rating
//      content
//      author {
//       name
//      }
//      game{
//       title
//      }
//   }
// }
// 例5
// query ExampleQuery($id:ID!) {
//   review(id:$id){
//      rating
//      content
//      game{
//       title
//       reviews{
//         rating
//       }
//      }
//   }
// }
// 例6 Mutation
// mutation DeleteMutation($id:ID!){
//   deleteGame(id:$id){
        // id,
        // title,
        // platform,
//   }
// }
// 例7
// mutation AddMutation($game:AddGameInput!){
//   addGame(game: $game) {
//      title,
//      platform
//   }
// }

// variable欄で
// {
//   "game":{
//   "title":"Dr. Mario",
//   "platform":["PC"]
//   }
// }
// 例8
// mutation UpdateMutation($id:ID!,$game:EditGameInput!){
//   updateGame(id:$id, game: $game) {
//      title,
//      platform
//   }
// }
// variable欄で
// {
//   "id":"2",
//   "game":{
//     "title":"Dr. Mari",
//     "platform":["PC"]
//   },
// }


