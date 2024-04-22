import Link from "next/link";
import React from "react";
import { ModeToggle } from "../providers/mode-toggle";
import { MenuIcon } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="flex bg-yellow-500 dark:bg-yellow-700 p-2 w-full">
        <div className="text-3xl font-bold items-center">
          <Link href="/">LOGO</Link>
        </div>
        <div className="justify-end text-lg font-medium w-full items-center gap-2 flex">
          <ModeToggle />
          <Link href="/home">Home</Link>
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
