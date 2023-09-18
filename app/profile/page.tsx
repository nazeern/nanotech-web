import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ProfileField from "@/app/components/ProfileField";

export const dynamic = "force-dynamic";

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("users")
    .select("full_name")
    .eq("id", user?.id ?? "")
    .single();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-1/2 w-5/6 my-12 flex flex-col gap-12">
        <p className="text-4xl text-left">
          <strong>
            {user ? `Welcome, ${user.email}.` : "Please login to continue."}
          </strong>
        </p>
        <div className="w-full rounded-lg border-1 bg-slate-200 p-4 flex flex-col gap-4">
          <p className="text-2xl">
            <strong>Profile Information</strong>
          </p>
          <div className="w-full flex justify-start items-center gap-4">
            <ProfileField
              fieldLabel="Email"
              fieldValue={user ? user.email! : "N/A"}
            />
            <ProfileField
              fieldLabel="Full Name"
              fieldValue={data?.full_name ?? "N/A"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
