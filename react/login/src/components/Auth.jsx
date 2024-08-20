import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import { auth } from './data/auth';

const Authe = () => {
  const [user, setUser] = useState(null); // Fixed useState syntax
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const foundUser = auth.find(
      (u) => u.Username === username && u.Email === email && u.Password === password
    );
    if (foundUser) {
      setUser(foundUser); // Set the user object
    } else {
      alert("Invalid credentials or user not found."); // Provide better feedback
    }
  };

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <Login
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin} // Pass the login handler as a prop
        />
      )}
    </>
  );
};

export default Authe;
