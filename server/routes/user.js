const router = require("express").Router()
const User = require("../model/user")
const Post = require("../model/post")
const bcrypt = require("bcrypt")

// update

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // Find the user by ID
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json("User not found");
      }

      // Update fields if provided in the request body
      if (req.body.profilePic) {
        user.profilePic= req.body.profilePic;
      }
      if (req.body.email) {
        user.email = req.body.email;
      }
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      // Save the updated user object
      const updatedUser = await user.save();

      console.log(updatedUser.username);
      console.log("user");
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update your account");
  }
});


/* 
{
    "userId" : "6332700aeda4d5e6fda5628a",
    "username":"sunil",
    "email": "sunil@gmail.com",
    "password":"sunil"
}
 */

// delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // delete all post of user and user account
    try {
      const user = await User.findById(req.params.id)
      try {
        await Post.deleteMany({ username: user.username })
        // only delete user account
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
      } catch (error) {
        res.status(500).json(error)
      }
    } catch (error) {
      res.status(404).json("User not found")
    }
  } else {
    res.status(401).json("You can delete only your account")
  }
})
/* 
 {
    "userId" : "633277ed7e57ec2eb50f9f18",
    "username":"sunil",
    "password":"sunil"
 } */

// get   user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...other } = user._doc
    res.status(200).json(other)
  } catch (error) {
    res.status(400).json(error)
  }
})
module.exports = router
