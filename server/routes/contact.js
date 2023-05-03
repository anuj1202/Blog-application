const router = require("express").Router()
const cont = require("../model/contact")

router.post("/contact", async (req, res) => {
    try {
      const newUser = new cont({
        username: req.body.username,
        email: req.body.email,
        desc: req.body.desc,
      })
  
      const user = await newUser.save()
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  })
  module.exports = router