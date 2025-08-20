import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-24 z-[90] absolute top-0 left-0">
      <div className="w-[90%] h-full mx-auto text-white flex items-center justify-between">
        {/* Left side: Logo and Title */}
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row gap-5 items-center">
            <Image src="/logo 1.png" alt="EverGreen Logo" width={50} height={50} />
            <h1 className="text-white font-semibold text-xl">EverGreen</h1>
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-row gap-5 items-center ml-10 text-xs font-light">
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--green)]"></div>
              <Link href="/home">
                Home
              </Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--gray)]"></div>
              <Link href="/home">
              ChangeLog
              </Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--gray)]"></div>
              <Link href="/home">
              AboutUs
              </Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--gray)]"></div>
              <Link href="/home">
              Shop
              </Link>
            </li>
            <li className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--gray)]"></div>
              <Link href="/home">
              Rust Server
              </Link>
            </li>
          </ul>
        </div>
        {/* Right side: Login Button */}
        <div>
          <button className="border text-[var(--green)] font-black px-15 py-2 rounded-br-2xl rounded-tl-2xl text-sm hover:cursor-pointer hover:scale-105 duration-200">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}