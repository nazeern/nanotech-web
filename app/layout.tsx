import Navbar from "@/app/components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
