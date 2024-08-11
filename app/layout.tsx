import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers";
import MenuBar from "@/components/MenuBar";
import Docs from "@/components/Docs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tars",
  description:
    "An advanced AI assistant designed to help with various tasks and provide intelligent insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <MenuBar />
            <main>{children}</main>
            <Docs />
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
