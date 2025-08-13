import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavMenu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />{" "}
            <span className="hidden sm:block">Cart</span>
          </Link>
        </Button>

        <Button asChild>
          <Link href="/signin">
            <UserIcon className="h-6 w-6" />{" "}
            <span className="hidden sm:block">Sign In</span>
          </Link>
        </Button>
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <ThemeToggle />

            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
                Cart
              </Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href="/signin">
                <UserIcon className="h-6 w-6" />
                Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
