"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


export const Nav = () => {
  const router = useRouter();


  return (
    <div className="hidden md:flex mb-20 w-full justify-center">
      <nav className="fixed top-0 z-50 flex items-center justify-between py-2 mt-6 border-b border-gray-500 bg-white/10 backdrop-blur-md rounded-full px-6 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} className="overflow-hidden" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
          

            return (
              <Link key={href || label} href={href} className="relative group" aria-label={label}>
                {label}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[2px] w-0 bg-purple-700 transition-all duration-700 ease-in-out group-hover:w-full",
              
                  )}
                />
              </Link>
            );
          })}
        </div>

        <Button className="rounded-full px-6" onClick={() => router.push("/#contact")}>
          Let's Talk
        </Button>
      </nav>
    </div>
  );
};
