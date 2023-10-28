const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
    posts: [Post] #return array of posts
    post(id: ID): Post #return post by id
  }
  
  # Post object
  type Post {
    id: ID
    date: String
    content: String
    images: String
  }

  # Mutation
  type Mutation {
    create(date: String, content: String, images: String): Post
    update(id: ID, date: String, content: String, images: String): Post
    delete(id: ID): Post
  }
`;

module.exports = { typeDefs };