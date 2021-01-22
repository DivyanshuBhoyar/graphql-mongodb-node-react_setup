const Post = require("../../models/Post");

module.exports = {
  //resolvers for mutation
  Mutation: {
    //various mutations as defined in typedefs related to Posts ; name of resolver function must be same
    async createPost(_, { body }, context) {
      const newPost = new Post({
        body,
        username: "kalass69",
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return newPost;
    },
  },
  //resolvers for posts; name of res func same as in type defs
  Query: {
    async getPosts() {
      const posts = await Post.find();
      return posts;
    },
  },
};
