import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileX - Convert files the FileX way",
  description: `
  FileX is a powerful and easy-to-use file converter app that can convert any type of file to any other format. It supports over 100 different file formats, including audio, video, image, document, and archive files.
  
  With FileX, you can easily convert your music files to a different format so that you can play them on any device. You can also convert your video files to a different format so that you can share them with your friends and family. FileX can also be used to convert your image files to a different format so that you can use them in your presentations or on your website.`,

  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
      <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      />
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl ">
          {children}
        </div>
      </body>
    </html>
  );
}
