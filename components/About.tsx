'use client'

export default function About() {
  return (
    <section id="about" className="w-full px-5 md:px-0 h-screen flex items-center justify-center bg-black relative overflow-hidden font-[ProductSans]">
      {/* Card container with inline background image */}
      <div
        className="relative z-10 rounded-3xl md:p-20 p-16 max-w-2xl text-white"
        style={{
          backgroundImage: `url('/images/About.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-2xl font-semibold font-[Rawclue] mb-5">What is Plexus AI?</h2>
        <p className="text-sm leading-relaxed">
          Plexus AI is a decentralized machine learning network designed to power secure,
          intelligent robotics. Using zero-knowledge proofs, it enables developers and
          enterprises to build, share, and deploy AI safely and privately.
        </p>
      </div>
    </section>
  )
}
