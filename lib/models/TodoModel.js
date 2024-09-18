import mongoose from 'mongoose'; // Correct import

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }); // Use 'timestamps' instead of 'timeStamp'

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', Schema); // Changed to 'TodoModel' and corrected the model name

export default TodoModel;
