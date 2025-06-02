import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSend(value);
      setValue('');
    }
  };

  return (
    <Box  display="flex" gap={1}>
      <TextField
        fullWidth
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type your message..."
      />
      <Button onClick={handleSend} variant="contained">Send</Button>
    </Box>
  );
}
