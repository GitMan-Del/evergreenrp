"use client"

import Image from "next/image";
import NavBar from "./components/Navbar";
import React from "react";
import Link from "next/link";


export default function Home() {
  const baseImage = ["/logo 1.png"];
  // Dublam array-ul pentru efect infinit
  const images = baseImage.flatMap((img) => Array(30).fill(img));
  const imagesDoubled = [...images, ...images];

  return (
    <div className="w-full h-min-screen bg-[var(--background)] flex flex-col overflow-auto overflow-x-hidden">
      {/* Hero , Main Section */}
      <section className="h-screen w-full bg-gradient-to-b from-[var(--green)] from-0% to-50% to-[var(--background)] p-1 md:p-3 relative overflow-hidden">
        <div className="hidden md:block md:absolute inset-10 z-20 bottom-0 -right-2/5">
          <Image
            src="/personagem-de-desenho-animado-a-viajar 1 1 (1).png"
            fill
            alt="Fivem-Caracter"
            priority
            className="object-contain"
          />
        </div>

        <svg viewBox="0 0 300 300" className="md:w-[600px] md:h-[600px] w-[500px] h-[500px] animate-spin2 left-1/2 bottom-1/2  md:-translate-0  -translate-x-1/2 md:opacity-100 opacity-30 translate-y-1/2  absolute md:right-60 md:bottom-0 rounded-full z-10">
          <defs>
            <path id="cerc" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"/>
          </defs>
          <text fontSize="18" fontWeight="bold">
            <textPath href="#cerc" startOffset="0%" spacing="auto">
              <tspan fill="white">Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
              <tspan fill="white"> • Ever</tspan>
              <tspan fill="var(--green)">Green</tspan>
            </textPath>
          </text>
        </svg>
      
        <NavBar />
        <main className="w-full h-[calc(100%)] rounded-2xl relative overflow-hidden">
          {/* Container pentru imaginea de fundal */}
          <div className="bg-[var(--background)] md:bg-transparent rounded-2xl absolute inset-0 z-0">
            <Image
              src="/Bg3.png"
              fill
              alt="backgroundimage"
              priority
              className="object-fill rounded-4xl hidden md:block"
            />
          </div>

          {/* Conținutul principal */}
          <div className="absolute inset-0 z-50 flex items-center justify-start w-[90%] mx-auto">
            <div className="flex flex-col gap-4 text-white text-left max-w-md">
              <div className="px-4 py-1 bg-[#1f1f1f]/80 rounded-br-2xl rounded-tl-2xl text-xs font-semibold text-white tracking-wide shadow w-fit">
                +100 <span className="text-[var(--green)]">online now</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black italic text-[var(--green)]">
                EverGreenRP
              </h1>
              <div className="flex flex-row justify-center"> 
               
                <p className="text-sm md:text-md">
                  EverGreen este un server de Roleplay avansat, bazat pe o economie reală, cu mici ajustări pentru o experiență cât mai autentică. Ne străduim să imităm viața reală în cele mai mici detalii, oferindu-ți posibilitatea de a intra într-o lume complexă și captivantă.
                </p>
              </div>
              <div className="flex flex-row gap-4 justify-start text-sm md:text-md">
                <button className="bg-[var(--green)] text-black font-black px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer hover:rotate-2 duration-150 hover:translate-1 text-sm md:text-base">
                  Play Now
                </button>
                <button className="border-2 border-[var(--green)] text-[var(--green)] px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer font-black hover:-rotate-2 duration-150 hover:-translate-1 text-sm md:text-base">
                  See More →
                </button>
              </div>

              <div className="flex flex-row gap-6 md:gap-10 text-white z-50 absolute bottom-4 max-w-lg">
                <div className="flex flex-col gap-1 items-left text-left">
                  <h2 className="font-black italic text-3xl md:text-4xl">+300</h2>
                  <p className="max-w-md text-sm md:text-sm text-[#6F6F6F]">+300 Online players , join us now</p>
                </div>
                <div className="flex flex-col gap-1 items-start text-left">
                  <h3 className="font-black italic text-3xl md:text-4xl">24/24</h3>
                  <p className="max-w-md text-sm md:text-sm text-[#6F6F6F]">The Server is Online 24 hours a day , no time to pause</p>
                </div>
                <div className="flex flex-col gap-1 items-leftr text-left">
                  <h4 className="font-black italic text-3xl md:text-4xl">Free</h4>
                  <p className="max-w-md text-sm md:text-sm  text-[#6F6F6F]">Free to join an play with your friends and + more people</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* Animatie infinita logos */}
      <section className="h-[20vh] w-full bg-[var(--background)] flex flex-row gap-3 items-center relative overflow-hidden justify-center">
        {/* Linia 1: logos mergand spre stanga-sus */}
        <div
          className="absolute left-0 w-full pointer-events-none -rotate-2 h-[60px]"
        >
          <div
            className="flex flex-row gap-3 animate-logo-marquee-x w-max"
          >
            {imagesDoubled.map((img, index) => (
              <div
                key={index}
              >
                <Image width={50} height={50} src={img} alt={`Imagine ${index}`} />
              </div>
            ))}
          </div>
        </div>
        {/* Linia 2: logos mergand spre dreapta-jos */}
        <div
          className="absolute left-0 w-full pointer-events-none rotate-2 h-[60px]"
        >
          <div
            className="flex flex-row gap-3 animate-logo-marquee-x-reverse w-max"
          >
            {imagesDoubled.map((img, index) => (
              <div
                key={index}
              >
                <Image
                  className="backdrop-blur-2xl rounded-xl"
                  width={50}
                  height={50}
                  src={img}
                  alt={`Imagine ${index}`}
                />
              </div>
            ))}
          </div>
        </div>       
      </section>

      <section className="w-full min-h-[80vh] flex flex-col text-white relative justify-between">
        {/* Background Image */}
        <Image
          src="/Background.svg"
          alt="Background"
          fill
          className="object-cover absolute top-0 left-0 z-0"
          priority
        />

        {/* Text Content */}
        <div className="flex flex-col items-center justify-start z-20 mt-16 w-full px-4">
          <div className="px-4 py-1 bg-[#1f1f1f]/80 rounded-br-2xl rounded-tl-2xl text-xs font-semibold text-white tracking-wide shadow">
            Choose <span className="text-[var(--green)]"> Your Path</span>
          </div>
          <h6 className="text-3xl md:text-6xl font-black italic text-white text-center mt-4">
            <span className="text-[var(--green)]">LIVE </span> the <span className="text-[var(--green)]"> BEST RP </span> experience
          </h6>
          <p className="max-w-md text-center mt-2 mb-4 text-sm md:text-base">
            Intră într-o lume unde realismul, comunitatea și distracția se îmbină perfect. Aici, nu ești doar un jucător – ești parte dintr-o poveste vie.
          </p>
          <button className="bg-[var(--green)] text-black font-black px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer mx-auto hover:rotate-2 duration-150 hover:translate-1 text-sm md:text-lg">
            Start Your Story
          </button>
        </div>

        {/* Imagine de jos, 80% lățime, mereu lipită de jos */}
        <div className="w-full relative z-10 flex justify-center items-end" style={{ minHeight: "0", flex: "1 0 auto" }}>
          <div className="w-[80%] absolute left-1/2 -translate-x-1/2 bottom-0">
            <Image
              src="/Group 12.png"
              alt="a"
              width={1920}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section id="aboutus" className="w-full h-screen text-white text-left flex flex-col md:flex-row-reverse items-center justify-evenly md:p-0 p-3">
        <div className="flex flex-col items-start justify-center">
          <div className="px-4 py-1 bg-[#1f1f1f]/80 rounded-br-2xl rounded-tl-2xl text-xs font-semibold text-white tracking-wide shadow">
            Meet <span className="text-[var(--green)]">our team</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black italic text-white mb-4 relative">
            <Image src="/Team.png" width={100} height={50} alt="team" className="absolute bottom-0 -right-20"/>
          About<span className="text-[var(--green)]"> Us - <br /> The team</span></h3>
          <p className="text-sm md:text-md max-w-md mb-6">
            Suntem o comunitate pasionată de RP unde realismul întâlnește distracția. Scopul nostru este să oferim un server unde fiecare jucător își poate crea și trăi propria poveste, alături de oameni dedicați.
          </p>
          <div className="flex flex-row gap-4 justify-start text-sm md:text-md">
            <button className="bg-[var(--green)] text-black font-black px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer hover:rotate-2 duration-150 hover:translate-1 text-sm md:text-base">
              Play along us
            </button>
            <button className="border-2 border-[var(--green)] text-[var(--green)] px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer font-black hover:-rotate-2 duration-150 hover:-translate-1 text-sm md:text-base">
              Meet us on Discord →
            </button>
          </div>
        </div>
        <Image src="/Group 44.png" alt="ServerPublicImgs" width={500} height={500}/>
      </section>

      <section className="w-full min-h-[35vh] flex flex-col items-center justify-center relative py-16 overflow-visible">
        {/* Iconite plutitoare */}
        <div className="absolute left-[12%] top-[38%] animate-float-slow">
          <Image src="/community-icon5.png" alt="icon1" width={36} height={36} className="drop-shadow-lg" />
        </div>
        <div className="absolute left-[22%] top-[18%] animate-float-medium">
          <Image src="/community-icon4.png" alt="icon2" width={36} height={36} className="drop-shadow-lg" />
        </div>
        <div className="absolute left-[48%] top-[6%] animate-float-fast">
          <Image src="/community-icon6.png" alt="icon3" width={36} height={36} className="drop-shadow-lg" />
        </div>
        <div className="absolute right-[22%] top-[18%] animate-float-medium">
          <Image src="/community-icon1.png" alt="icon4" width={36} height={36} className="drop-shadow-lg" />
        </div>
        <div className="absolute right-[12%] top-[38%] animate-float-slow">
          <Image src="/community-icon2.png" alt="icon5" width={36} height={36} className="drop-shadow-lg" />
        </div>
        <div className="absolute left-1/3 bottom-10 -translate-x-1/2 animate-float-medium">
          <Image src="/community-icon3.png" alt="icon6" width={36} height={36} className="drop-shadow-lg" />
        </div>
        {/* Badge */}
        <div className="mb-2 flex items-center justify-center">
          <span className="px-4 py-1 bg-[#1f1f1f]/80 rounded-br-2xl rounded-tl-2xl text-xs font-semibold text-[var(--green)] tracking-wide shadow">
            The <span className="text-white">Community</span>
          </span>
        </div>
        {/* Titlu */}
        <h5 className="text-3xl md:text-5xl font-black italic text-center text-white mb-2">
          <span className="text-white">Be Part of the </span>
          <span className="text-[var(--green)]">Community</span>
        </h5>
        {/* Descriere */}
        <p className="text-[#bdbdbd] text-center max-w-xl mx-auto text-sm md:text-base font-medium">
          Intră într-un server unde comunitatea crește, staff implicat, jucători activi și chat familiar, alături de o voce jovială deschisă.
        </p>
      </section>

      <footer className="w-full bg-gradient-to-t from-[var(--green)] from-0% to-70% to-[var(--background)]  pb-2 px-2   text-[#bdbdbd]">
        <div className="w-full mx-auto bg-[var(--background)] h-full p-2 rounded-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-start gap-8">
          {/* Left: Logo & Description */}
          <div className="flex flex-col gap-2 max-w-xs w-full md:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo 1.png" alt="EverGreen Logo" width={32} height={32} className="rounded" />
              <span className="font-bold text-white text-lg md:text-lg">EverGreen</span>
            </div>
            <p className="text-sm leading-relaxed">
              Server de comunitate pentru toți cei ce vor să se distreze, socializeze și să experimenteze un mediu de joc prietenos, activ și unic.
            </p>
            <div className="flex gap-2 mt-2">
              <Link href="https://discord.gg/9XFvyBvNaa" aria-label="Discord" className="hover:opacity-80">
                <Image src="/dis.png" alt="Discord" width={30} height={30} />
              </Link>
              <Link href="#" aria-label="tiktok" className="hover:opacity-80">
                <Image src="/tt.png" alt="tiktok" width={30} height={30} />
              </Link>
            </div>
          </div>
          {/* Middle: Pages */}
          <div className="flex flex-col gap-2 min-w-[120px] w-full md:w-auto">
            <span className="font-bold text-white mb-1 text-lg md:text-lg">Pages</span>
            <Link href="#" className="hover:text-[var(--green)] text-sm md:text-sm">Home</Link>
            <Link href="/changelog" className="hover:text-[var(--green)] text-sm md:text-sm">ChangeLog</Link>
            <Link href="#" className="hover:text-[var(--green)] text-sm md:text-sm">About us</Link>
            <Link href="#" className="hover:text-[var(--green)] text-sm md:text-sm">Shop</Link>
            <Link href="#" className="hover:text-[var(--green)] text-sm md:text-sm">Rust Server</Link>
          </div>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-2 min-w-[180px] w-full md:w-auto">
            <span className="font-bold text-white mb-1 text-lg md:text-lg">Contact Info</span>
            <Link href="mailto:evergreen@gmail.com" className="text-sm md:text-sm hover:text-[var(--green)] break-all">evergreen@gmail.com</Link>
            <Link href="tel:+401234567890" className="text-sm md:text-sm hover:text-[var(--green)]">Telefon: +40 123 456 7890</Link>
            <Link href="tel:+40712345678" className="text-sm md:text-sm hover:text-[var(--green)]">+40712345678</Link>
            <Link href="https://discord.gg/9XFvyBvNaa" target="_blank" rel="noopener noreferrer" className="text-sm md:text-sm hover:text-[var(--green)] break-all">discord.gg/evergreen</Link>
          </div>
        </div>
        <div className="w-full md:w-[85%] text-xs text-[#6d6d6d] mt-8 border-t border-[#232323] pt-2 text-center mx-auto md:text-left">
          © 2024 EverGreen. Toate drepturile rezervate.
        </div>
        </div>
      </footer>
    </div>
  );
}