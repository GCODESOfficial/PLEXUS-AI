'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState('Launch App');

  const navLinks = ['About', 'Technology', 'Use Cases', 'Tokenomics', 'Contact'];

  return (
    <header className="w-full md:fixed top-0 left-0 z-50 bg-black text-white">
      {/* Top Nav */}
      <div className="w-full mx-auto flex items-center justify-between md:px-28 px-6 py-3 md:py-6">
        {/* Logo */}
        <Link href="/">
        <div className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="Plexus AI"
            width={130}
            height={32}
          />
        </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
         {navLinks.map((link) => {
  const targetId = link.toLowerCase().replace(/\s+/g, '-');
  return (
    <button
      key={link}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      className="text-sm hover:text-green-400"
    >
      {link}
    </button>
  );
})}

        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Image src="/images/Telegram.svg" alt="Telegram" width={20} height={20} />
          <Image src="/images/X.svg" alt="X" width={20} height={20} />
          <button
            onMouseEnter={() => setLabel('Coming Soon')}
            onClick={() => setLabel('Coming Soon')}
            onMouseLeave={() => setLabel('Launch App')}
            className="bg-[#00FFB2] text-black text-xs font-medium rounded px-4 py-1.5 hover:bg-white transition-colors"
          >
            {label}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Nav */}
      <div
        className={`fixed top-[55px] right-0 h-[90%] w-[80%] max-w-xs bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-xl p-[0.8px] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-x-3' : 'translate-x-full '
        } md:hidden`}
      >
        <div className='bg-[#01110B] text-white h-full w-full rounded-xl'>
        <div className="flex flex-col h-full justify-start px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
  const targetId = link.toLowerCase().replace(/\s+/g, '-');
  return (
    <button
      key={link}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setIsOpen(false);
        }
      }}
      className="text-sm text-left"
    >
      {link}
    </button>
  );
})}

          </nav>

          <div className="flex justify-center gap-8 mt-auto mb-6">
            <Image src="/images/Telegram.svg" alt="Telegram" width={20} height={20} />
            <Image src="/images/X.svg" alt="X" width={20} height={20} />
          </div>

          <button
            onMouseEnter={() => setLabel('Coming Soon')}
            onClick={() => setLabel('Coming Soon')}
            onMouseLeave={() => setLabel('Launch App')}
            className="bg-[#00FFB2] text-black text-xs font-medium rounded px-4 py-2 w-40 mx-auto"
          >
            {label}
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}
