"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { ImageIcon, LayoutDashboard, MessageSquare } from "lucide-react";
const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashbord",
    icon: LayoutDashboard,
    href: "/dashbord",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/dashbord",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/dashbord",
    color: "text-sky-500",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="space-y-4 py-4 flex-col h-full bg-[#111827] text-white">
        <div className="px-e py-2 flex-1">
          <Link className="flex items-center pl-3 mb-14" href="/dashbord">
            <div className="relative w-8 h-8 mr-4">
              <Image fill alt="Logo" src={Logo} />
            </div>
            <h1 className={cn("text-2xl font-bold", monserrat.className)}>
              Genius
            </h1>
          </Link>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className="tezt-sm group flex p-3 w-full justify-start font-medium cursor-pointer
                hover:text-white hover:bg-white/10 rounded-lg transition
                "
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
