const Post = require("../../models/Post");

module.exports = {
  //resolvers for mutation
  Mutation: {
    //various mutations as defined in typedefsrelated to Posts ; name of resolver function must be same
    async createPost(_, { body }, context) {
      if (body.trim === "") {
        throw new Error("Post Body must not be empty");
      }
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
