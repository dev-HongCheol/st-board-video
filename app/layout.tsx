import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginPage from "@/components/login/LoginPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log("🚀 ~ session:", session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {session?.user && session?.user.email ? (
            session.user.name
          ) : (
            <LoginPage />
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
