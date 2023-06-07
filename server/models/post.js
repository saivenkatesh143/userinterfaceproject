// 1. import mongoose
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    postcontent: {type: String},
    postlikes: { type: String}
  })
  // 3. create model of schema
const post = mongoose.model("post", postSchema);
// 4. create CRUD functions on model
//CREATE a post
async function createpost(id, postcontent){

  //const user = await getpost(id);

  const newpost=await post.create({
    postcontent:postcontent
  });
  return newpost;

}
async function updatepost(id,postcontent){
  const post = await post.updateOne({"_id": id}, {$set: { postcontent: postcontent}});
  return post;

}

async function deletepost(id){
  await User.deleteOne({"_id": id});
}

// utility functions
async function getpost(id) {
  return await User.findOne({"_id": id});
}


module.exports = {createpost,updatepost, deletepost};



