import { Box, Typography, Paper } from '@mui/material';

export default function ChatBox({ messages }) {
  console.log('ChatBox rendered=====>', messages);

  return (
    <Box flex={1} p={2} overflow="auto" display="flex" flexDirection="column" gap={2}>
      {messages.map((msg, i) => (
        <Paper key={i} style={{ padding: 10, backgroundColor: '#e0f7fa' }}>
          <Typography variant="body1">
            <b>{msg.sender}</b>: {msg.text}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {msg.time}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}
