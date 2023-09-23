import Link from "next/link";
import Messages from "@/app/components/Messages";

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 my-24">
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
        <label className="text-md" htmlFor="firstName">
          First Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="firstName"
          placeholder="First Name"
          required
        />
        <label className="text-md" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <button
          formAction="/auth/sign-up"
          className="bg-slate-900 hover:bg-slate-800 rounded px-4 py-2 text-white mb-2"
        >
          Sign Up
        </button>
        <Link
          href="/login"
          className="px-4 py-2 text-black mb-2 text-center hover:underline"
        >
          Already have an account? Login!
        </Link>
        <Messages />
      </form>
    </div>
  );
}
