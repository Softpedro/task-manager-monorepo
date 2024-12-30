"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { login } from "../../state/authSlice";
import { LoginForm } from "ui";
import { useRouter } from "next/navigation";

export const LoginClient: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);
  const [localErrorMessage, setLocalErrorMessage] = useState("");

  const handleLogin = async (username: string, password: string) => {
    const result = await dispatch(login({ username, password }));
    if (login.fulfilled.match(result)) {
      router.push("/tasks");
    } else {
      setLocalErrorMessage(result.payload as string);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <LoginForm
          onLogin={handleLogin}
          errorMessage={localErrorMessage || error || ""}
        />
      </div>
    </div>
  );
};
