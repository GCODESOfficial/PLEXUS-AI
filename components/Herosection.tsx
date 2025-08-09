'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Herosection() {
    const [label, setLabel] = useState('Launch App')
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setLabel('Coming Soon')
    setIsClicked(true)

    // Optional: auto-reset after 2 seconds
    setTimeout(() => {
      setLabel('Launch App')
      setIsClicked(false)
    }, 2000)
  }

   
  return (
    <section className="w-full md:h-screen bg-black text-white flex flex-col md:flex-row items-center md:justify-between md:pl-28 relative overflow-hidden font-[ProductSans]">
       <div className="absolute left-0 top-0 w-full h-full z-0 hidden md:block">
        <Image
          src="/images/Blurrright.svg"
          alt="3D Graphic"
          width={400}
          height={400}
          className="h-auto w-auto"
        />
      </div>
      {/* Left Text Content */}
      <div className="w-full z-10 pt-20 md:text-left text-center hidden md:block">
        <h1 className="md:text-6xl text-3xl  font-extrabold leading-tight text-[#F1F5FF] font-[Rawclue]">
          Decentralized <br />
          <span className="">Intelligence for the</span><br />
          <span className="">Real World</span>
        </h1>
        <p className="mt-6 text-[#ADB5C5] text-lg  md:max-w-xl">
          Build, Deploy, and Monetize AI-designed robots with Privacy.
        </p>
        
        <button
      onMouseEnter={() => setLabel('Coming Soon')}
      onMouseLeave={() => {
        setLabel('Launch App')
        setIsClicked(false)
      }}
      onClick={handleClick}
      className={`mt-6 px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-300
        ${isClicked ? 'bg-white text-black' : 'bg-[#00FFAA] text-black hover:bg-white'}
      `}
    >
      {label}
    </button>

      </div>

      <div className="w-full z-10 pt-32 px-10 md:text-left text-center md:hidden">
        <h1 className="md:text-6xl text-5xl font-[Rawclue] font-extrabold leading-tight text-[#F1F5FF]">
          The ZK-Powered Network for <br />
          <span className="text-[#10F3AF]">Autonomous Intelligence</span>
        </h1>
        <p className="mt-6 text-[#ADB5C5] text-lg  md:max-w-xl">
         Build, Deploy, and Monetize AI-designed robots with Privacy.
        </p>
        
        <button
      onMouseEnter={() => setLabel('Coming Soon')}
      onClick={() => setLabel('Coming Soon')}
      onMouseLeave={() => setLabel('Launch App')}
      className="mt-6 bg-[#00FFAA] text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-white transition-colors"
    >
      {label}
    </button>
      </div>

      {/* Right Graphic Content */}
      <div className="relative z-0 md:pt-24">
        <Image
          src="/images/plexus.svg"
          alt="3D Graphic"
          width={400}
          height={400}
          className="object-cover  md:h-screen md:w-[50rem] 2xl:w-[70rem]"
        />
      </div>
    </section>
  );
}
