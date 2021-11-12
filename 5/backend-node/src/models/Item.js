const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
  name: { type: String, required: true },
  quality: { type: Number, required: true },
  unused: { type: Boolean, default: true },
  color: { type: String, enum: ['red', 'green', 'blue'], default: 'green' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null }
});

const Item = model("Item", itemSchema)

module.exports = Item