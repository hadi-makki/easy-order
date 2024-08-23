"use client";
import React from "react";

import { Button, Input, Label } from "@/components";
import Container from "@/layout/global/Container";
import Section from "@/layout/global/Section";
import { baseUrl } from "@/utilities/constants";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    const data = {
      grant_type: "",
      username: "admin", // Replace with your actual username
      password: "admin", // Replace with your actual password
      scope: "",
      client_id: "",
      client_secret: "",
    };

    await axios
      .post(`${baseUrl}/auth/token`, qs.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        Cookies.set("token", `Bearer ${res.data.access_token}`);
        window.location.href = "/chat-bot";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Section className=" py-10 h-screen">
      <Container className="h-full">
        <div className="-mx-3 flex justify-center h-full items-center">
          <div className="w-full px-3 xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
            <div className="w-full rounded-lg border border-slate-200 bg-white p-6 pt-5 ">
              <div className="mb-2">
                <h3 className="mb-1 text-xl font-bold text-slate-700 ">
                  Login
                </h3>
                <p className="text-sm text-slate-500 ">
                  With valid credentials
                </p>
              </div>
              <div className="py-2">
                <Label htmlFor="emial-address" className="mb-2">
                  Username
                </Label>
                <Input
                  placeholder="example"
                  id="email-address"
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="py-2">
                <Label
                  htmlFor="password"
                  className="mb-2 w-full items-center justify-between"
                >
                  Password
                  {/* <a
                      className="text-xs text-blue-500 hover:text-blue-700"
                      href="#"
                    >
                      Forgot
                    </a> */}
                </Label>
                <Input
                  id="password"
                  placeholder="password"
                  type="password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="pt-3">
                <Button
                  block
                  className="bg-blue-600 text-white hover:bg-blue-800"
                  onClick={handleLogin}
                >
                  Account Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default LoginPage;
