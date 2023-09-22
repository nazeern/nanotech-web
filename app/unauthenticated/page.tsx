import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Unauthenticated() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="md:w-1/2 w-5/6 my-24 flex flex-col gap-12">
      <p className="text-4xl text-left">
        <strong>{"Please login to continue."}</strong>
      </p>
    </div>
  );
}
