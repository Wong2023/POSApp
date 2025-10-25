import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fffaf0;
`;

const LoginCard = styled.div`
  background: #f5f4ef;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: #59001e;
  border-radius: 50%;
  margin: 0 auto 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background: #8b002d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Avatar />
        <h2>Welcome</h2>
        <p>
          <u>Log in</u>
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="PIN"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <Button type="submit">LOG IN</Button>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
