// src/components/UserSidebar.js
import { Box, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';

export default function UserSidBar({ users, onLogout, username }) {
  console.log('Connected Users====>', users);

  return (
    <Box  bgcolor="#f5f5f5" p={2}  display="flex" height="90vh"flexDirection="column" justifyContent="space-between">
      <Box>
        <Typography variant="h6" gutterBottom>
          Logged in as: @{username}
        </Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Typography variant="h6" gutterBottom>
          Connected Users
        </Typography>
        <List>
          {users.map((u, i) => (
            <ListItem key={i}>
              <ListItemText primary={u} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider style={{ margin: '10px 0' }} />
      <Button variant="contained" color="secondary" onClick={onLogout}>
        Leave
      </Button>
    </Box>
  );
}
