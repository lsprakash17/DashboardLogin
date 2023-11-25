import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Mock credentials for demonstration purposes
    const mockCredentials = {
      username: 'admin',
      password: 'admin123',
    };

    // Check if entered credentials match the mock credentials
    if (username === mockCredentials.username && password === mockCredentials.password) {
      // If credentials match, setLoggedIn(true) and redirect to dashboard
      setLoggedIn(true);
      history.push('/dashboard');
    } else {
      // Otherwise, show a toast indicating bad credentials
      toast.error('Invalid username or password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px' }}
      />
      <br />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px' }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ margin: '10px' }}>
        Login
      </Button>
    </div>
  );
};

export default Login;
