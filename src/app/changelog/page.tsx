"use client"

import Image from "next/image";
import NavBar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch' | 'hotfix';
  title: string;
  description: string;
  changes: string[];
}

const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: "2.1.0",
    date: "2024-12-15",
    type: "major",
    title: "EverGreen Revolution",
    description: "Cea mai mare actualizare din istoria serverului - economie complet revizuită și sistem de job-uri nou",
    changes: [
      "Sistem economic complet revizuit cu inflație reală",
      "10 job-uri noi cu progresie avansată",
      "Sistem de crafting cu 50+ iteme noi",
      "Optimizări majore de performanță",
      "Interfață complet nouă pentru inventar"
    ],
  },
  {
    version: "2.0.5",
    date: "2024-12-10",
    type: "hotfix",
    title: "Stabilizare Server",
    description: "Corectări rapide pentru problemele de conectivitate",
    changes: [
      "Rezolvată problema de lag în zonele aglomerate",
      "Corectat bug-ul cu salvarea progresului",
      "Îmbunătățită stabilitatea conexiunii"
    ],
  },
  {
    version: "2.0.0",
    date: "2024-12-01",
    type: "major",
    title: "EverGreen 2.0",
    description: "Lansarea oficială a versiunii 2.0 cu toate funcționalitățile noi",
    changes: [
      "Server complet reconstruit pe arhitectura nouă",
      "Sistem de case și proprietăți implementat",
      "50+ vehicule noi cu fizică reală",
      "Sistem de poliție și justiție",
      "Comunitate Discord integrată"
    ],
  },
  {
    version: "1.9.8",
    date: "2024-11-20",
    type: "minor",
    title: "Îmbunătățiri Comunitate",
    description: "Actualizări pentru o experiență mai bună în comunitate",
    changes: [
      "Sistem de rank-uri pentru staff",
      "Chat global cu filtre noi",
      "Sistem de reportare îmbunătățit",
      "5 evenimente noi pentru comunitate"
    ],
  },
  {
    version: "1.9.5",
    date: "2024-11-10",
    type: "patch",
    title: "Corectări și Optimizări",
    description: "Îmbunătățiri generale de performanță și stabilitate",
    changes: [
      "Optimizări de FPS în toate zonele",
      "Corectate 15+ bug-uri minore",
      "Îmbunătățită sincronizarea între jucători",
      "Redusă latenta de rețea"
    ],
    
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'major': return 'bg-gradient-to-r from-[var(--green)] to-emerald-400 text-black';
    case 'minor': return 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white';
    case 'patch': return 'bg-gradient-to-r from-purple-500 to-pink-400 text-white';
    case 'hotfix': return 'bg-gradient-to-r from-red-500 to-orange-400 text-white';
    default: return 'bg-gray-600 text-white';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'major': return '🚀';
    case 'minor': return '✨';
    case 'patch': return '🔧';
    case 'hotfix': return '🚨';
    default: return '📝';
  }
};

export default function ChangelogPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChangelog = CHANGELOG_DATA.filter(entry => {
    const matchesType = selectedType === 'all' || entry.type === selectedType;
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[var(--background)] flex flex-col overflow-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-[40vh] w-full p-1 md:p-3 relative overflow-hidden">
        

       

        <NavBar />
        
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="px-4 py-1 bg-[#1f1f1f]/80 rounded-br-2xl rounded-tl-2xl text-xs font-semibold text-white tracking-wide shadow w-fit mx-auto mb-4">
              Stay <span className="text-[var(--green)]">Updated</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic text-[var(--green)] mb-4">
              Changelog
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Urmărește toate actualizările, îmbunătățirile și noile funcționalități ale serverului EverGreen
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full bg-[var(--background)] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Caută în changelog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1f1f1f]/80 border border-[#333] rounded-br-2xl rounded-tl-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[var(--green)] focus:ring-1 focus:ring-[var(--green)] transition-all duration-200"
              />
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              {['all', 'major', 'minor', 'patch', 'hotfix'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-br-xl rounded-tl-xl text-sm font-semibold transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-[var(--green)] text-black scale-105 shadow-lg'
                      : 'bg-[#1f1f1f]/80 text-white hover:bg-[#333] hover:scale-102'
                  }`}
                >
                  {type === 'all' ? 'Toate' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Content */}
      <section className="w-full bg-[var(--background)] pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {filteredChangelog.map((entry) => (
              <div
                key={entry.version}
                className="group relative bg-gradient-to-r from-[#1f1f1f]/90 to-[#1a1a1a]/90 rounded-2xl p-6 md:p-8 border border-[#333] hover:border-[var(--green)]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--green)]/10"
              >
                {/* Version Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-br-xl rounded-tl-xl text-sm font-bold ${getTypeColor(entry.type)}`}>
                      {getTypeIcon(entry.type)} {entry.type.toUpperCase()}
                    </span>
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-black text-[var(--green)]">
                        v{entry.version}
                      </h3>
                      <p className="text-gray-400 text-sm">{entry.date}</p>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[var(--green)] transition-colors duration-200">
                    {entry.title}
                  </h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                {/* Changes List */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-white mb-4">Modificări:</h5>
                  <ul className="space-y-2">
                    {entry.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-3">
                        <span className="text-[var(--green)] text-lg mt-0.5">•</span>
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredChangelog.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Nu s-au găsit rezultate</h3>
              <p className="text-gray-400 mb-6">
                Încearcă să modifici filtrele sau să cauți altceva
              </p>
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSearchTerm('');
                }}
                className="bg-[var(--green)] text-black font-bold px-6 py-3 rounded-br-xl rounded-tl-xl hover:scale-105 transition-transform duration-200"
              >
                Resetează Filtrele
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Vrei să vezi mai multe <span className="text-[var(--green)]">actualizări</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Alătură-te comunității EverGreen și fii primul care află despre noile funcționalități și îmbunătățiri!
          </p>
          <div className="flex flex-row gap-4 justify-center text-sm md:text-md">
            <Link
              href="/"
              className="bg-[var(--green)] text-black font-black px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer hover:rotate-2 duration-150 hover:translate-1 text-sm md:text-base flex items-center justify-center"
            >
              Back Home
            </Link>
            <Link
              href="https://discord.gg/9XFvyBvNaa"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--green)] text-[var(--green)] px-8 md:px-10 py-2 rounded-br-2xl rounded-tl-2xl hover:cursor-pointer font-black hover:-rotate-2 duration-150 hover:-translate-1 text-sm md:text-base flex items-center justify-center"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-t from-[var(--green)] from-0% to-70% to-[var(--background)] pb-2 px-2 text-[#bdbdbd]">
        <div className="w-full mx-auto bg-[var(--background)] h-full p-2 rounded-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-start gap-8">
            <div className="flex flex-col gap-2 max-w-xs w-full md:w-auto">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/logo 1.png" alt="EverGreen Logo" width={32} height={32} className="rounded" />
                <span className="font-bold text-white text-lg">EverGreen</span>
              </div>
              <p className="text-sm leading-relaxed">
                Server de comunitate pentru toți cei ce vor să se distreze, socializeze și să experimenteze un mediu de joc prietenos, activ și unic.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px] w-full md:w-auto">
              <span className="font-bold text-white mb-1 text-lg">Pages</span>
              <Link href="/" className="hover:text-[var(--green)] text-sm">Home</Link>
              <Link href="/changelog" className="hover:text-[var(--green)] text-sm text-[var(--green)]">ChangeLog</Link>
              <Link href="#" className="hover:text-[var(--green)] text-sm">About us</Link>
              <Link href="#" className="hover:text-[var(--green)] text-sm">Shop</Link>
              <Link href="#" className="hover:text-[var(--green)] text-sm">Rust Server</Link>
            </div>
            <div className="flex flex-col gap-2 min-w-[180px] w-full md:w-auto">
              <span className="font-bold text-white mb-1 text-lg">Contact Info</span>
              <Link href="mailto:evergreen@gmail.com" className="text-sm hover:text-[var(--green)] break-all">evergreen@gmail.com</Link>
              <Link href="tel:+401234567890" className="text-sm hover:text-[var(--green)]">Telefon: +40 123 456 7890</Link>
              <Link href="https://discord.gg/9XFvyBvNaa" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--green)] break-all">discord.gg/evergreen</Link>
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
