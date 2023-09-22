import Link from "next/link";
import Messages from "@/app/components/Messages";
import { IoIosArrowBack as BackArrow } from "react-icons/io";

export const dynamic = "force-dynamic";

export default function Login() {
  return (
    <>
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <Link
          href="/"
          className="absolute left-16 top-24 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
          <BackArrow className="group-hover:-translate-x-1" />
          Back
        </Link>

        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action="/auth/sign-in"
          method="post"
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
            Login
          </button>
          <Link
            href="/sign-up"
            className="px-4 py-2 text-black mb-2 text-center hover:underline"
          >
            Don't have an account? Sign up!
          </Link>
          <Messages />
        </form>
      </div>
    </>
  );
}
