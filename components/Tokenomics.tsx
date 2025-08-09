// components/Tokenomics.tsx
import Image from "next/image";

const tokenUtility = [
  "Earn – Get paid when your AI models are used",
  "Access – Use $PLX for training and deployment",
  "Stake – Lock tokens to boost visibility and trust",
];

const tokenBenefits = [
  "Private – ZK-powered, secure usage tracking",
  "Rewards – Earn for model and compute contributions",
  "Deflationary – Value grows through burns and staking",
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="w-full bg-black text-white py-20 md:px-28 flex flex-col items-center font-[ProductSans] relative">
         <div className="absolute left-0 -top-80 w- h-full z-0 hidden md:block">
                            <Image
                              src="/images/Blurrright.svg"
                              alt="3D Graphic"
                              width={400}
                              height={400}
                              className="h-auto w-auto"
                            />
                          </div>
      <h2 className="text-4xl md:text-4xl font-bold font-[Rawclue] text-center px-10">
        Powering Autonomous <br className="" />
        Intelligence with $PLX
      </h2>
      <p className="text-center text-sm md:text-base md:max-w-lg px-10 mt-4">
        The $PLX token is the core utility asset of the Plexus AI network — powering access,
        coordination, and monetization within a privacy-first AI ecosystem.
      </p>

      <div className="relative w-full md:max-w-7xl mx-auto md:h-96 flex md:flex-row flex-col justify-between items-center mt-16 ">
        {/* Left Boxes */}
        <div className=" space-y-6">
            <div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-md p-[0.8px]">
          <div className="bg-[#01110B] rounded-md p-5 w-[350px]">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/icon-utility.svg" alt="utility" width={20} height={20} />
              <span className="text-sm font-medium">Token Utility</span>
            </div>
            <ul className="text-xs space-y-1 opacity-80 list-disc list-inside">
              {tokenUtility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          </div>

<div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-md p-[0.8px]">
          <div className="bg-[#01110B] rounded-md p-5 w-[350px]">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/images/icon-benefits.svg" alt="benefits" width={20} height={20} />
              <span className="text-sm font-medium">Token Benefits</span>
            </div>
            <ul className="text-xs space-y-1 opacity-80 list-disc list-inside">
              {tokenBenefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Center Coin */}
        <div className="z-10">
          <Image
            src="/images/Coins.svg"
            alt="PLX Coin"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Right Stats */}
        <div className=" space-y-3 w-full md:w-auto px-6">
          {[
            { label: "Name", value: "Plexus" },
            { label: "Ticker", value: "PLX" },
            { label: "Total Supply", value: "100,000,000" },
            { label: "TAX", value: "5/5 %" },
            { label: "Listed on", value: "" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-md p-[0.8px] "
            >
                <div className="bg-[#01110B] rounded-md px-4 py-2 md:w-56 w-full text-sm flex gap-2 items-center">
              <span className="">{item.label}:</span>
              <span className="font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
