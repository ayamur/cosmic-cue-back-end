import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema({
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  
},{
  timestamps: true,
})

const Blog = mongoose.model('Blog', blogSchema)

export { Blog }