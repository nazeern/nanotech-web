"use client";

import { useState } from "react";
import LogoutButton from "./LogoutButton";
import Sidebar from "./Sidebar";

export default function AuthNav() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <LogoutButton />
      <Sidebar open={open} close={close} toggle={toggle} />
    </>
  );
}
