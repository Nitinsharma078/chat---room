// src/pages/index.js
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleJoin = () => {
    if (username.trim()) {
      localStorage.setItem('chat-username', username);
      router.push('/chat');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} style={{ padding: 30, width: 400 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Chat App
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Enter your name to join the chat
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 20 }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleJoin}
        >
          Join Chat
        </Button>
      </Paper>
    </Box>
  );
}
