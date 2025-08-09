'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleOk = () => {
    setShowModal(false)
    router.refresh()
  }

  // Disable scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showModal])

  return (
    <section id="contact" className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 relative font-[ProductSans] overflow-hidden">
         {/* Blurred + Blush Overlay */}
{/* Top Edge Blur/Blush
<div className="pointer-events-none absolute top-0 left-0 w-full h-24 z-10 bg-gradient-to-t from-black/90 to-transparent blur-2xl" /> */}

<div className="absolute top-0 left-0 w-full h-32 z-30 bg-gradient-to-t from-transparent via-black to-black pointer-events-none" />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-8 md:px-0">
            <div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-2xl p-[0.8px]">
          <div className="bg-[#01110B] rounded-2xl p-10 text-center md:w-[450px] max-w-full">
            <Image
              src="/images/check-icon.svg"
              alt="Check"
              width={100}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Message sent!</h2>
            <p className="text-sm text-gray-300 mb-6">
              Thanks for reaching out. We have received your message and will get back to you shortly.
            </p>
            <button
              onClick={handleOk}
              className="bg-white text-black text-sm font-medium rounded px-6 py-2 w-40 mx-auto"
            >
              ok
            </button>
          </div>
          </div>
        </div>
      )}

      <video
  autoPlay
            loop
            muted
            controls={false}
            playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/contact.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Main Contact UI */}
      <div className="w-full max-w-5xl bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-2xl p-[1.5px] z-10">
      
        <div className="w-full max-w-5xl rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 bg-[#01110B] bg-opacity-50">
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-[Rawclue]">
              Get in <span className="text-[#00FFB2]">Touch</span>
            </h2>
            <p className="text-sm text-gray-300 mt-4 max-w-sm">
              For technical partnerships, media, or support, contact the Plexus AI team.
            </p>
            <div className="mt-6 items-center gap-2 text-[#00FFB2] text-sm hidden md:flex">
              <span>Join Plexus Community on</span>
              <Image src="/images/Telegram.svg" alt="Telegram" width={18} height={18} />
              <Image src="/images/X.svg" alt="X" width={18} height={18} />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 w-full max-w-md text-white">
            <div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-lg p-[0.5px]">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-[#01110B] w-full rounded-lg px-4 py-2 text-sm placeholder-[#2D6252] outline-none"
              />
            </div>
            <div className="bg-gradient-to-r from-[#00E19D] to-[#001C0F] rounded-lg p-[0.5px]">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="bg-[#01110B] w-full rounded-lg px-4 py-2 text-sm placeholder-[#2D6252] outline-none"
              />
            </div>
            <div className="bg-gradient-to-l from-[#00E19D] to-[#001C0F] rounded-lg p-[0.5px] h-24">
              <textarea
                placeholder="Message"
                required
                rows={4}
                className="bg-[#01110B] w-full rounded-lg px-4 h-full text-sm placeholder-[#2D6252] outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-black text-sm font-medium rounded px-4 py-2 w-40 mx-auto"
            >
              Submit
            </button>
          </form>

          
        </div>

        
      </div>

       <div className="mt-6 flex items-center gap-2 text-[#00FFB2] text-sm md:hidden z-10">
              <span>Join Plexus Community on</span>
              <Image src="/images/Telegram.svg" alt="Telegram" width={18} height={18} />
              <Image src="/images/X.svg" alt="X" width={18} height={18} />
            </div>
    </section>
  )
}
