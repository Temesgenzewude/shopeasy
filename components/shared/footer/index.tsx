import React from 'react'
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="w-full border-t">
        <div className="wrapper p-5">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
