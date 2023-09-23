import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";
import Sidebar from "./Sidebar";
import AuthNav from "./AuthNav";
import UnauthNav from "./UnauthNav";

export const dynamic = "force-dynamic";

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed top-0 z-50 w-full h-16 flex justify-center border-b border-b-foreground/10 bg-white md:backdrop-filter md:backdrop-blur-3xl">
      <div className="w-full flex justify-between items-center p-3 text-sm text-foreground">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/nanotech-logo.png"
              alt="Nano Logo"
              width="87"
              height="30"
              className="pb-1 mx-2"
            />
          </Link>
          <Link href="/profile">
            <p className="py-2 px-4 hover:underline hidden md:block">Profile</p>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/construction"
            className="hidden md:block py-2 px-4 hover:underline"
          >
            Contact Us
          </Link>
          <span className="border-l h-6" />
          {user ? <AuthNav /> : <UnauthNav />}
        </div>
      </div>
    </nav>
  );
}
