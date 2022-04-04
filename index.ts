import { ApolloServer, gql } from "apollo-server";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: ID!
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }
`;

const users = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Jane",
  },
  {
    id: "3",
    name: "Psy_Exterminator_69",
  },
];

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args, context, info) =>
      users.find((element) => element.id === args.id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
