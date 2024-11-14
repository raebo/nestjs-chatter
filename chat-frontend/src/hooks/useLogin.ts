import { API_URL } from '../constants/url';
import { useState } from 'react';
import client from "../constants/apollo-client";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();
  
  const login = async (request: LoginRequest) => {
    const res = await fetch(
      `${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });
    if (!res.ok) {
      if (res.status === 401) {
        setError("Invalid credentials");
      } else {
        setError("An unknown error occurred");
      }
      return
    }
    setError("");
    await client.refetchQueries({include: "active"})
  };
  
  return { login, error };
}

export { useLogin }