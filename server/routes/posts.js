const router = require("express").Router()
const Post = require("../model/post")

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savePost = await newPost.save()
    res.status(200).json(savePost)
  } catch (error) {
    res.status(500).json(error)
  }
})
/* 
{
    "username":"admin",
    "title":"test5",
    "desc":"loreme2"
} */

// update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        // const updatePost = await Post.findByIdAndUpdate(
        //   req.params.id,
        //   {
        //     $set: req.body,
        //   },
        //   { new: true }
        // )
        // res.status(200).json(updatePost)
        if (req.body.profilePic) {
          post.photo= req.body.photo;
        }
        if(req.body.title){
          post.title= req.body.title;
        }
        if(req.body.desc){
          post.desc=req.body.desc;
        }
        const updatePost= await post.save();
        res.status(200).json(updatePost)
      } catch (error) {
        res.status(500).json(error)
      }
    } else {
      res.status(401).json("You can update only your post!")
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id })
    if (!post) {
      return res.status(404).json("Post not found");
    }
    console.log("post",post);
    console.log("sent", post.username);
    console.log("body", req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted!");
      } catch (error) {
        res.status(500).json(error);
        console.log("back1", error);
      }
    } else {
      res.status(401).json("You can delete only your post!");
      console.log("back2", error);
    }
  } catch (error) {
    res.status(500).json(error);
    console.log("back3", error);
  }
})

// get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(404).json(error)
  }
})

// get all post
router.get("/", async (req, res) => {
  const username = req.query.user
  const catName = req.query.cat
  try {
    let posts
    if (username) {
      posts = await Post.find({ username: username })
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      })
    } else {
      posts = await Post.find()
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json(error)
  }
})

//localhost:5000/posts?user=ram

module.exports = router
