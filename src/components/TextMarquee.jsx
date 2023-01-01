import React from 'react'
import Marquee from 'react-fast-marquee'

export default function TextMarquee() {
  return (
    <Marquee
      className="bg-white border-y-4 border-primary-dark  overflow-hidden"
      gradient={false}
    >
      <div className="py-[26px] flex items-center gap-10 text-primary-dark mr-10">
        <img src="shapes/start.svg" alt="" />
        <p className="uppercase text-[60px] font-bold">We're a</p>
        <img src="shapes/blink.svg" alt="" />
        <p className="uppercase text-[60px] font-bold">full-service</p>
        <img src="shapes/heart.svg" alt="" />
        <p className="uppercase text-[60px] font-bold">CREATIVE digital</p>
        <img src="shapes/agency.svg" alt="" />
        <p className="uppercase text-[60px] font-bold">AGENCY</p>
      </div>
    </Marquee>
  )
}
