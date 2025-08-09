'use client';

import Image from 'next/image';

export default function Features() {
  return (
    <section id="technology" className="bg-black text-white py-20 px-4 md:px-12 font-[ProductSans] relative md:w-screen">
       <div className="absolute right-0 -top-80 w- h-full z-0 hidden md:block">
              <Image
                src="/images/Blurrleft.svg"
                alt="3D Graphic"
                width={400}
                height={400}
                className="h-auto w-auto"
              />
            </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl font-bold font-[Rawclue]">
          Privacy-First Infrastructure for <br /> Autonomous Systems
        </h2>
        <button className="mt-4 bg-[#00442A] text-[#00FFB2] text-sm px-4 py-1.5 rounded-md">
          Three Core Tech Features
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className='bg-gradient-to-b from-[#00E19D] to-[#001C0F] rounded-xl p-[0.8px]'>
        <div className="bg-[#0A0F0D] rounded-xl relative">
          <div className="flex justify-center mb-6">
            <Image src="/images/Features/zkp.svg" alt="ZKP Icon" width={80} height={80} className='w-full h-auto rounded-t-xl' />
          </div>
          <div className='h-32 p-3'>
          <h3 className="text-left text-base font-semibold mb-2">
            Zero-Knowledge Proofs (ZKPs)
          </h3>
          <p className="text-sm text-left leading-relaxed text-gray-300">
            Train AI models without exposing sensitive data, Verify model integrity
            without leaking IP, Enable trustless collaboration
          </p>
          </div>
        </div>
        </div>

        {/* Card 2 */}
      

        <div className='bg-gradient-to-b from-[#00E19D] to-[#001C0F] rounded-xl p-[0.8px]'>
        <div className="bg-[#0A0F0D] rounded-xl relative">
          <div className="flex justify-center mb-6">
            <Image src="/images/Features/ai-training.svg" alt="ZKP Icon" width={80} height={80} className='w-full h-auto rounded-t-xl' />
          </div>
          <div className='p-3 h-32'>
          <h3 className="text-left text-base font-semibold mb-2">
             Decentralized AI Training
          </h3>
          <p className="text-sm text-left leading-relaxed text-gray-300">
            Distributed compute for scalable, privacy- <br /> preserving learning
          </p>
          </div>
        </div>
        </div>

        {/* Card 3 */}
       

         <div className='bg-gradient-to-b from-[#00E19D] to-[#001C0F] rounded-xl p-[0.8px]'>
        <div className="bg-[#0A0F0D] rounded-xl relative">
          <div className="flex justify-center mb-6">
            <Image src="/images/Features/secure-arch.svg" alt="ZKP Icon" width={80} height={80} className='w-full h-auto rounded-t-xl' />
          </div>
          <div className='p-3 h-32'>
          <h3 className="text-left text-base font-semibold mb-2">
             Secure-by-Design Architecture
          </h3>
          <p className="text-sm text-left leading-relaxed text-gray-300">
            Cryptographically enforced from input to <br /> deployment
          </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
