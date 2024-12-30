import React, { useState } from "react";
import "./loginform.css";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  errorMessage?: string;
}

export function LoginForm({ onLogin, errorMessage }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="username">Usuario:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="form-input ">
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}
