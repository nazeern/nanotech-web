"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const resources = [
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Contact Us",
    href: "/construction",
  },
];

interface SidebarProps {
  open: boolean;
  close: () => void;
  toggle: () => void;
}

export default function Sidebar({ open, close, toggle }: SidebarProps) {
  return (
    <>
      {open ? (
        <AiOutlineClose className="text-2xl md:hidden" onClick={toggle} />
      ) : (
        <RxHamburgerMenu className="text-2xl md:hidden" onClick={toggle} />
      )}
      {open ? (
        <div className="absolute left-0 top-16 p-20 w-full h-screen bg-background flex flex-col items-center gap-8">
          {resources.map(({ label, href }) => {
            return (
              <Link href={href} className="text-black" onClick={close}>
                {label}
              </Link>
            );
          })}
          <Link
            href="login"
            className="bg-slate-200 hover:bg-slate-300 w-5/6 rounded px-4 py-2 text-center"
            onClick={close}
          >
            Login
          </Link>
        </div>
      ) : null}
    </>
  );
}
