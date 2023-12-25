"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type Query {
    message: String
  }
`;
exports.resolvers = {
    Query: {
        message: () => {
            return "hello world";
        }
    }
};
