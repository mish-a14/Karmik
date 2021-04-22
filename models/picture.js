const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema(
  {
    name: String,
    board: { type: Schema.Types.ObjectId, ref: "Board" },
    url: String
  },
  {
    timestamps: true
  }
);

let PictureSchema = mongoose.model("Picture", pictureSchema);
module.exports = PictureSchema;
