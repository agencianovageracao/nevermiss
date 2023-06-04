"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Icon from "phosphor-react";
import { Button } from "@/components/globals/Button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-20">
      <div className="container flex justify-between items-center">
        <button>
          <img src="/logo-comprida.png" alt="Logo" />
        </button>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-8">
            <li
              className={`text-lg transition-all hover:font-bold ${
                pathname === "/" ? "font-bold" : ""
              }`}
            >
              <Link className="flex items-center gap-2" href="/">
                <Icon.House />
                Início
              </Link>
            </li>
            <li
              className={`text-lg transition-all hover:font-bold ${
                pathname.includes("/cheats") ? "font-bold" : ""
              }`}
            >
              <Link className="flex items-center gap-2" href="/">
                <Icon.GameController />
                Cheats
              </Link>
            </li>
            <li
              className={`text-lg transition-all hover:font-bold ${
                pathname === "/discord" ? "font-bold" : ""
              }`}
            >
              <Link className="flex items-center gap-2" href="/">
                <Icon.DiscordLogo />
                Discord
              </Link>
            </li>
            <li
              className={`text-lg transition-all hover:font-bold ${
                pathname === "/youtube" ? "font-bold" : ""
              }`}
            >
              <Link className="flex items-center gap-2" href="/">
                <Icon.YoutubeLogo />
                Youtube
              </Link>
            </li>
          </ul>
          <Button className="bg-purple-500 hover:brightness-95">Forum</Button>
        </div>
      </div>
    </nav>
  );
};
