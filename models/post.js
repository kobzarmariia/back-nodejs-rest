const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId, //not just object
      ref: "User",
      required: true
    }
  },
  { timestamps: true } //mongoose automatically add timestamps createdAt: updatedAt:
);

module.exports = mongoose.model("Post", postSchema);
