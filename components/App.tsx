'use client';

import Image from 'next/image';
import React from 'react';

const steps = [
  {
    title: 'Step 1: Build',
    description:
      'Use our SDKs and tools to create intelligent robotics software, agents, and models tailored for autonomous systems.',
    icon: '/images/Stack.svg',
  },
  {
    title: 'Step 2: Train',
    description:
      'Access distributed compute and privacy-preserving data pipelines to train your models securely, powered by zero-knowledge proofs.',
    icon: '/images/Stack.svg',
  },
  {
    title: 'Step 3: Deploy',
    description:
      'Launch trained models across decentralized networks and autonomous environments with cryptographic integrity checks.',
    icon: '/images/Stack.svg',
  },
  {
    title: 'Step 4: Monetize',
    description:
      'List and sell your AI-powered robots to earn cryptocurrency. All transparently tracked and verifiable',
    icon: '/images/Stack.svg',
  },
];

export default function Apps() {
  return (
    <section className="w-full bg-black text-white px-4 md:px-28 py-20 md:py-32 font-[ProductSans] relative">
        <div className="absolute right-0 -top-80 w- h-full z-0 hidden md:block">
                      <Image
                        src="/images/Blurrleft.svg"
                        alt="3D Graphic"
                        width={400}
                        height={400}
                        className="h-auto w-auto"
                      />
                    </div>
        <div className='mb-20'>
            <h2 className="text-4xl md:text-3xl font-bold font-[Rawclue] text-center">
            A Full Stack Ecosystem for Robotic Innovation
          </h2>
          <p className="md:px-60 text-gray-300 text-center">
            Plexus AI empowers robotic developers with a complete, private infrastructure that covers every stage of the AI lifecycle, from model creation to deployment and monetization.
          </p>
        </div>
      <div className="w-full md:h-[565px] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Video */}
        <div  className="w-full h-full md:w-1/2 bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-xl p-[1.5px]">

        
        <div className="h-full w-full overflow-hidden rounded-xl">
          <video
            src="/plexusAI.mp4"
            autoPlay
            loop
            muted
            controls={false}
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        </div>

        {/* Right: Text and Steps */}
        <div className="w-full h-full md:w-1/2 flex flex-col gap-4">
          

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-lg p-[0.8px]"
            >
                <div className='bg-[#001C0F] p-4 pr-16 rounded-lg h-32  gap-1 items-start flex flex-col justify-center'>
                <div className='flex items-center gap-2 mb-2'>
              <Image src={step.icon} alt={step.title} width={24} height={24} />
              <h3 className="font-semibold ">{step.title}</h3>
              </div>
              <div>
                
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
