const postsResolvers = require("./postsResolvers");

//exports from the resolvers package
module.exports = {
  //rsolvers for query of all types
  Query: {
    ...postsResolvers.Query,
  },
  //resolvers for mutation of all types
  Mutation: {
    ...postsResolvers.Mutation,
  },
};
