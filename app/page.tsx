import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight as RightArrow } from "react-icons/ai";
import { BsPersonCheckFill, BsBuildingsFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

export const dynamic = "force-dynamic";

const pricingPlans = [
  {
    title: "Standard",
    subtitle: "Unlimited tests at just $10 per test.",
    icon: <BsPersonCheckFill className="text-4xl" />,
  },
  {
    title: "Pro",
    subtitle: "Up to 1000 tests per month for $4000 a month.",
    icon: <HiUserGroup className="text-4xl" />,
  },
  {
    title: "Enterprise",
    subtitle: "Contact us to discuss enterprise discounts.",
    icon: <BsBuildingsFill className="text-4xl" />,
  },
];

export default async function Index() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-14 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12 gap-2">
          <h1 className="text-7xl font-bold text-center my-8">
            Rapid Testing.
            <br />
            Accurate Results.
          </h1>
          <h2 className="text-2xl font-bold text-center"></h2>
          <h1 className="sr-only">Nano Home Page</h1>
          <p className="text-3xl !leading-tight mx-auto max-w-xl text-center">
            Medical testing in the palms of your hands. Say goodbye to expensive
            lab visits and long wait times.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Image
              src="/nanotech-logo.png"
              alt="Nano Logo"
              width="87"
              height="30"
              className="pb-1 mx-2"
            />
            <Link
              href="/login"
              className="py-2 px-4 font-medium rounded-md no-underline text-slate-200 bg-slate-900 hover:bg-slate-800 flex items-center group text-sm"
            >
              Sign Up Free
              <RightArrow className="ml-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <p className="text-medium text-center font-medium">
          Choose the pricing plan that works for you.
        </p>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pricingPlans.map(({ title, subtitle, icon }) => (
            <div
              key={title}
              className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground"
            >
              {icon}
              <h3 className="text-2xl my-4 font-bold mb-2  min-h-[40px] lg:min-h-[60px]">
                {title}
              </h3>
              <div className="flex flex-col grow gap-4 justify-between">
                <p className="text-sm opacity-70">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
