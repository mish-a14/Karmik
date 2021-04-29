const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    name: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    // this is avatar?
    pictures: { type: Schema.Types.String, ref: "Picture" }
  },
  {
    timestamps: true
  }
);

let BoardSchema = mongoose.model("Board", boardSchema);
module.exports = BoardSchema;
