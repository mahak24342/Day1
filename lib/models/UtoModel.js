import mongoose from 'mongoose'; // Corrected import

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
}, { timestamps: true }); // Corrected 'timestamps'

const UtoModel = mongoose.models.Godo || mongoose.model('Godo', Schema);

export default UtoModel; // Correct export
