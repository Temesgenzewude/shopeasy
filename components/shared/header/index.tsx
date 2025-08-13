import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={48}
              height={48}
              className="rounded-full"
              priority={true}
            />
            <span className="hidden lg:block text-2xl  font-bold ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <NavMenu />
      </div>
    </header>
  );
}
