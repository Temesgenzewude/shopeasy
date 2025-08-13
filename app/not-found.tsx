"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

import { Home } from "lucide-react";
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} Logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-destructive">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button
          variant="outline"
          className="mt-4 ml-2 cursor-pointer bg-yellow-400 text-white hover:bg-yellow-500 "
          onClick={() => (window.location.href = "/")}
        >
          <Home className=" h-5 w-5" />
          Go to Home
        </Button>
      </div>
    </div>
  );
}
