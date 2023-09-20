// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    // return (
    //   <div>
    //     <h2>Welcome, {username}!</h2>
    //     <button onClick={handleLogout}>Logout</button>
    //   </div>
    // );
    window.location.href='./menu'
  }

  return (
    <div style={{ backgroundColor: 'lightblue', width: '1520px', height: '750px' }}>
      <h2 style={{ color: 'white', paddingTop: '100px', textAlign: 'center', fontSize: '40px' }}>Login</h2>
      <input
      style={{ padding: '20px', paddingRight: '60px', marginLeft: '650px', borderRadius: '10px', marginBottom: '5px' }}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      style={{ padding: '20px', paddingRight: '60px', marginLeft: '650px', borderRadius: '10px', marginBottom: '5px' }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ marginLeft: '700px', marginTop: '30px', borderRadius: '5px', height: '50px', width: '120px', fontSize: '20px', color: 'blue' }}
      onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
