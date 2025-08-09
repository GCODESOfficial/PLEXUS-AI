'use client';

import Image from 'next/image';

const impactData = [
  {
    title: 'Logistics & Supply Chain',
    description:
      'Optimize warehouse robotics and autonomous delivery using AI models trained securely on private logistics data.',
    icon: '/images/icons/logistics.svg',
  },
  {
    title: 'Smart Cities',
    description:
      'Enable intelligent traffic control, safety systems, and energy optimization — all without compromising citizen privacy.',
    icon: '/images/icons/smartcity.svg',
  },
  {
    title: 'Autonomous Drones',
    description:
      'Use drones for agriculture, monitoring, and inspections with AI models trained on sensitive terrain data, privately.',
    icon: '/images/icons/drone.svg',
  },
  {
    title: 'Industrial Automation',
    description:
      'Deploy robots in manufacturing and hazardous environments with secure, verifiable AI — protecting IP and safety protocols.',
    icon: '/images/icons/industrial.svg',
  },
  {
    title: 'Defense & Security',
    description:
      'Support autonomous surveillance and emergency response with encrypted AI that protects mission-critical data.',
    icon: '/images/icons/defense.svg',
  },
  {
    title: 'Healthcare & Assistive Robotics',
    description:
      'Power hospital and home-assist robots with ZK-secured AI trained on sensitive patient data without privacy risks.',
    icon: '/images/icons/health.svg',
  },
];

export default function Impact() {
  return (
    <section id="use-cases" className="w-full bg-black text-white py-20 px-0 md:px-28 flex justify-center font-[ProductSans] relative">
      <div className="absolute left-0 -top-80 w- h-full z-0 hidden md:block">
                    <Image
                      src="/images/Blurrright.svg"
                      alt="3D Graphic"
                      width={400}
                      height={400}
                      className="h-auto w-auto"
                    />
                  </div>
      <div className='bg-gradient-to-l from-[#00E19D] via-[#001C0F] to-[#001C0F] rounded-2xl p-[2px]'>
      <div className=" w-full bg-[#01110B] rounded-2xl p-10">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-4 px-12 font-[Rawclue]">
          Real-World Impact of <br />
          Autonomous Intelligence
        </h2>
        <p className="text-sm md:text-base text-center text-gray-300 max-w-xl mx-auto mb-10">
          Plexus AI powers real-world robotics and intelligent systems across
          critical industries, with speed, privacy, and autonomy at the core.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactData.map((item, index) => (
             <div
    key={index}
    className={`rounded-lg p-[1px]
      ${
        index % 2 === 0
          ? 'bg-gradient-to-l md:bg-gradient-to-l'
          : 'bg-gradient-to-r md:bg-gradient-to-l'
      }
      from-[#00E19D] to-[#001C0F]`}
  >
            <div
              key={index}
              className="rounded-lg bg-[#01110B] p-6 space-y-3 h-48"
            >
              <Image src={item.icon} alt={item.title} width={32} height={32} />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
