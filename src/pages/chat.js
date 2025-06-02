import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import UserSidBar from '../components/UserSideBar';
import { Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useSocket } from '../lib/socket';

export default function Chat() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('chat-username');
    if (!stored) router.push('/');
    else setUsername(stored);
  }, []);

  // Initialize socket connection
  useSocket(username, setUsers);

  // Poll messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!username) return null;

  const handleSend = async (text) => {
    const msg = {
      text,
      sender: username,
      time: new Date().toLocaleTimeString(),
    };
    await axios.post('/api/messages', msg);
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <Grid container height="90vh" gap={6} justifyContent="center" alignItems="flex-start">
      <Grid item xs={3} width="25%" bgcolor="#f5f5f5">
        <UserSidBar
          users={users}
          username={username}
          onLogout={() => {
            localStorage.removeItem('chat-username');
            router.push('/');
          }}
        />
      </Grid>
      <Grid item xs={9} width="70%" display="flex" flexDirection="column">
        <Paper elevation={3} style={{ flex: 1, margin: 10, padding: 10, overflow: 'auto' }}>
          <ChatBox messages={messages} />
        </Paper>
        <Box p={2}>
          <MessageInput onSend={handleSend} />
        </Box>
      </Grid>
    </Grid>
  );
}
