import { connectToDB } from '../../lib/db';
import Message from '../../models/Message';

export default async function handler(req, res) {
  await connectToDB();

  if (req.method === 'GET') {
    const messages = await Message.find().sort({ createdAt: 1 });
    // console.log("messages====>",messages);
    return res.status(200).json(messages);
  }
  if (req.method === 'POST') {
    const { text, sender, time } = req.body;
    const newMsg = await Message.create({ text, sender, time });
    return res.status(201).json(newMsg);
  }

  return res.status(405).end(); // Method Not Allowed
}
