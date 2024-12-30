"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/hooks/reduxHook";
import { logout } from "@/app/state/authSlice";

export const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    console.log("logout");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};
