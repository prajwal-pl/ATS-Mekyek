import Link from "next/link";
import React from "react";
import { ModeToggle } from "../providers/mode-toggle";
import { MenuIcon } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="sticky">
      <div className="flex bg-white text-purple-900 d p-2 w-full">
        <div className="text-3xl font-bold items-center">
          <Link href="/">LOGO</Link>
        </div>
        <div className="justify-end text-lg font-medium w-full items-center gap-2 flex">
          <div className="text-purple-900 dark:text-white">
            <ModeToggle />
          </div>
          <Link href="/sign-in">Products</Link>
          <Link href="/sign-in">Services</Link>
          <Link href="/sign-in">Sign In</Link>
          <div className="md:hidden">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
