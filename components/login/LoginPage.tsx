"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      LoginPage
      <p>
        <Button size={"sm"} onClick={() => signIn("google")}>
          Login
        </Button>
      </p>
    </div>
  );
};

export default LoginPage;
