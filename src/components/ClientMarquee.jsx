import React from 'react'
import Marquee from 'react-fast-marquee'

export default function ClientMarquee() {
  return (
    <Marquee
      className="bg-natural-aqua border-y-4 border-primary-dark  overflow-hidden relative z-30"
      gradient={false}
    >
      <div className="flex items-center gap-[170px] text-primary-dark py-16 mr-[170px]">
        <img src="shapes/client-1.svg" alt="" />
        <img src="shapes/client-2.svg" alt="" />
        <img src="shapes/client-3.svg" alt="" />
        <img src="shapes/client-4.svg" alt="" />
        <img src="shapes/client-5.svg" alt="" />
        <img src="shapes/client-6.svg" alt="" />
      </div>
    </Marquee>
  )
}
