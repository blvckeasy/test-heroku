export const typeDefs = `#graphql
  type Query {
    message: String
  }
`;

export const resolvers = {
    Query: {
        message: (): string => {
            return "hello world";
        }
    }
}