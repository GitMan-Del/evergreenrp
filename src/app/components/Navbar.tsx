"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "ChangeLog",
    href: "/changelog",
  },
  {
    label: "AboutUs",
    href: "#AboutUs",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Rust Server",
    href: "/rust-server",
  },
];

function isActiveLink(href: string, pathname: string) {
  // For hash links, check if pathname is root and hash matches
  if (href.startsWith("#")) {
    // Not used in this config, but for completeness
    return false;
  }
  // For links with hash (e.g. /#AboutUs)
  if (href.startsWith("/#")) {
    return pathname === "/" && typeof window !== "undefined" && window.location.hash === href;
  }
  // For normal links
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-black/40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--background-light)] z-[100] shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-row items-center gap-4 mb-8">
            <Image src="/logo 1.png" alt="EverGreen Logo" width={40} height={40} />
            <span className="text-white font-semibold text-lg">EverGreen</span>
            <button
              className="ml-auto text-[var(--green)] text-2xl font-bold focus:outline-none"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const active =
                link.href.startsWith("#")
                  ? false
                  : isActiveLink(link.href, pathname);
              return (
                <li key={link.label} className="flex flex-row items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      active ? "bg-[var(--green)]" : "bg-[var(--gray)]"
                    }`}
                  ></div>
                  <Link
                    href={link.href}
                    className={`text-white text-base font-medium transition-colors ${
                      active ? "text-[var(--green)]" : "hover:text-[var(--green)]"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-8">
            <button className="w-full border text-[var(--green)] font-black px-6 py-2 rounded-br-2xl rounded-tl-2xl text-sm hover:cursor-pointer hover:scale-105 duration-200">
              Login
            </button>
          </div>
        </div>
      </aside>
      {/* Navbar */}
      <div className="w-full h-24 z-[90] absolute top-0 left-0">
        <div className="w-[90%] h-full mx-auto text-white flex items-center justify-between">
          {/* Left side: Logo and Title */}
          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-row gap-5 items-center">
              <Image src="/logo 1.png" alt="EverGreen Logo" width={50} height={50} />
              <h1 className="text-white font-semibold text-xl">EverGreen</h1>
            </div>
            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex flex-row gap-5 items-center ml-10 text-xs font-light">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href.startsWith("#")
                    ? false
                    : isActiveLink(link.href, pathname);
                return (
                  <li key={link.label} className="flex flex-row items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        active ? "bg-[var(--green)]" : "bg-[var(--gray)]"
                      }`}
                    ></div>
                    <Link
                      href={link.href}
                      className={active ? "text-[var(--green)]" : ""}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Right side: Login Button & Sidebar Toggle */}
          <div className="flex flex-row items-center gap-4">
            <button className="hidden md:block border text-[var(--green)] font-black px-15 py-2 rounded-br-2xl rounded-tl-2xl text-sm hover:cursor-pointer hover:scale-105 duration-200">
              Login
            </button>
            {/* Sidebar Toggle Button (Mobile) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)]/10 transition"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}