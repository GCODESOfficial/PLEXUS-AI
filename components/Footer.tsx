/* eslint-disable @next/next/no-img-element */
// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-xl p-[0.8px] font-[ProductSans]">
      <footer className="bg-[#01110B] font-[DMSans] text-[#E5E7EB] py-12 px-6 md:px-28 rounded-xl">
        <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between gap-8 pt-8">
          {/* Left Section */}
          <div className="flex-1">
            {/* Logo */}
            <Link href="/">
              <div>
                <img
                  src="/images/Logo.svg"
                  alt="GS Labs"
                  className="md:w-28 h-auto w-[180px] mb-4 md:mb-6"
                />
              </div>
            </Link>
            <div className="max-w-sm md:border-b pb-2 md:border-[#1E2537]">
              <p className="max-w-sm text-sm mb-4 font-[ProductSans]">
                Plexus AI is the decentralized ZK network powering privacy-first
                robotics and autonomous systems.
              </p>
            </div>
            <p className="text-xs pt-4 text-gray-400 hidden md:block">
              © {new Date().getFullYear()} Plexus AI. All Rights Reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid gap-20  md:flex md:gap-8 font-[ProductSans]">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#technology" className="hover:underline">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="hover:underline">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#tokenomics" className="hover:underline">
                    Tokenomics
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Social Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Image
                    src="/images/Telegram.svg"
                    alt="Plexus AI"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/X.svg"
                    alt="Plexus AI"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>


            <div className="max-w-sm border-t pt-2 border-[#1E2537] md:hidden">
                <p className="text-base pt-4 text-gray-400 ">
              © {new Date().getFullYear()} Plexus AI. <br /> All Rights Reserved.
            </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
