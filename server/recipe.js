const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var recipe = new Schema({ name: String, ingredients: String });

module.exports=recipe=mongoose.model("recipe",recipe)