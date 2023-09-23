"use client";

import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function UnauthNav() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <Link href="/login">
        <p className="hidden md:block py-2 px-4 hover:underline">Log in</p>
      </Link>
      <Link
        href="/sign-up"
        className="py-2 px-4 rounded-md no-underline text-slate-200 font-medium bg-slate-900 hover:bg-slate-800"
        onClick={close}
      >
        Sign Up Free
      </Link>
      <Sidebar open={open} close={close} toggle={toggle} />
    </>
  );
}
