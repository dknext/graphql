let games = [
  {id:"1", title:"Zelda", platform:["Switch"]},
  {id:"2", title:"Final Fantasy", platform:["PSS", "XBOX"]},
  {id:"3", title:"Elden Ring", platform:["PC", "PSS", "XBOX"]},
  {id:"4", title:"Mario cart", platform:["Switch"]},
  {id:"5", title:"Pokemon", platform:["PSS", "XBOX", "PC"]},
]

let authors = [
  {id:"1", name:"mario", verified:true},
  {id:"2", name:"luigi", verified:false},
  {id:"3", name:"peach", verified:true},
]

let reviews = [
  {id:"1", rating:9, content:"lorem100", author_id:"1", game_id:"3"},
  {id:"2", rating:10, content:"lorem100", author_id:"2", game_id:"1"},
  {id:"3", rating:6, content:"lorem100", author_id:"2", game_id:"2"},
  {id:"4", rating:3, content:"lorem100", author_id:"3", game_id:"2"},
  {id:"5", rating:7, content:"lorem100", author_id:"1", game_id:"4"},
  {id:"6", rating:8, content:"lorem100", author_id:"1", game_id:"4"},
  {id:"7", rating:3, content:"lorem100", author_id:"3", game_id:"5"}
]

export default {games, reviews, authors }