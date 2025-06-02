import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  time: String,
}, { timestamps: true });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chat-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
