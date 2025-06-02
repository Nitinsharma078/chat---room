// src/lib/socket.js
import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const useSocket = (username, setUsers) => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io();

    if (username) {
      socketRef.current.emit('join', username);

      // Listen for user updates
      socketRef.current.on('users', (users) => {
        setUsers(users);
      });
    }

    return () => socketRef.current.disconnect();
  }, [username, setUsers]);

  return socketRef.current;
};
