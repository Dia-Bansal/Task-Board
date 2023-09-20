import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (!username || !password) {
      setErrorMessage('Username and password are required.');
      return; // Prevent further execution if fields are empty
    }

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Signup successful!');

    // Redirect to the login page after successful signup
    window.location.href="./login"
  };

  return (
    <div style={{ backgroundColor: 'lightblue', width: '1520px', height: '750px' }}>
      <h2 style={{ color: 'white', paddingTop: '100px', textAlign: 'center', fontSize: '40px' }}>Sign Up</h2>
      <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
      <input
        style={{ padding: '20px', paddingRight: '60px', marginLeft: '650px', borderRadius: '10px', marginBottom: '5px' }}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required
      /><br></br>
      <input
        style={{ padding: '20px', paddingRight: '60px', marginLeft: '650px', borderRadius: '10px', marginBottom: '5px' }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} required
      />
      <br></br>
      <p style={{marginLeft:'650px'}}>Already a member?<href style={{color:'blue'}} onClick={()=>{
                  window.location.href="./login"
                }}>Login</href></p>
      <button
        style={{ marginLeft: '700px', marginTop: '30px', borderRadius: '5px', height: '50px', width: '120px', fontSize: '20px', color: 'blue' }}
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
