import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF_Chad -Dash",
  description: "Chat with your Docs !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body className={inter.className}>
        
        <div>
          <h1>PDF-Chad</h1>
            <SignedIn>
              {/* Mount the UserButton component */}
            <UserButton />
            </SignedIn>
            <SignedOut>
              {/* Signed out users get sign in button */}
            <SignInButton/>
          </SignedOut>
          </div>


          {children}
        </body>

      </html>
    </ClerkProvider>
  );
}
