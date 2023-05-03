const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  }
)
module.exports = mongoose.model("Contact", ContactSchema)
