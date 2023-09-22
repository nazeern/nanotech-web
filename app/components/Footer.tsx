import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const resources = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/construction",
    label: "About Us",
  },
  {
    link: "/construction",
    label: "Terms & Privacy",
  },
];

export default async function Footer() {
  return (
    <footer className="flex justify-center w-full mt-auto border-t border-t-foreground/10">
      <div className="w-1/2 flex justify-between items-center my-12">
        <Link href="/">
          <Image
            src="/nanotech-logo.png"
            alt="Nano Logo"
            width="87"
            height="30"
            className="pb-1 mx-2"
          />
        </Link>
        <div className="flex flex-col gap-2">
          <p className="text-medium font-medium">Resources</p>
          {resources.map(({ link, label }) => {
            return <Link href={link}>{label}</Link>;
          })}
        </div>
      </div>
    </footer>
  );
}
