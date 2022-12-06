import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-[#F4F4F4]">
      <div className="border-x-4 border-b-4 border-primary-dark max-w-[1400px] mx-auto bg-white relative z-20">
        <div className="mx-auto flex items-center justify-center border-b-4 border-primary-dark">
          <div className="side" />
          <div className="content">
            <div className="flex gap-[112px] pb-20 px-16 pt-[120px]">
              <div className="w-1/2">
                <div className="mb-14">
                  <div className="flex items-center gap-[14px] mb-6">
                    <img src="icons/logo.svg" alt="Workment Logo" />
                    <h2>Workment</h2>
                  </div>
                  <p>
                    It is a long established fact that reader will be distracted
                    readable content of when looking.
                  </p>
                </div>

                <div className="space-y-[31px]">
                  <h5>agency@workment.com</h5>
                  <h5>+01 984 555 000</h5>
                  <div className="gap-[18px] flex items-center">
                    <div className="relative w-max">
                      <span className="absolute inset-0 bg-primary-dark border-4 border-primary-dark z-10"></span>
                      <button className="bg-natural-pink w-[45px] h-[45px] flex items-center justify-center -translate-y-[5px] translate-x-[5px] relative z-20 active:translate-x-0 active:translate-y-0 transition-transform">
                        <img src="icons/twitter.svg" alt="Twitter" />
                      </button>
                    </div>
                    <div className="relative w-max">
                      <span className="absolute inset-0 bg-primary-dark border-4 border-primary-dark z-10"></span>
                      <button className="bg-natural-pink w-[45px] h-[45px] flex items-center justify-center -translate-y-[5px] translate-x-[5px] relative z-20 active:translate-x-0 active:translate-y-0 transition-transform">
                        <img src="icons/facebook.svg" alt="Twitter" />
                      </button>
                    </div>
                    <div className="relative w-max">
                      <span className="absolute inset-0 bg-primary-dark border-4 border-primary-dark z-10"></span>
                      <button className="bg-natural-pink w-[45px] h-[45px] flex items-center justify-center -translate-y-[5px] translate-x-[5px] relative z-20 active:translate-x-0 active:translate-y-0 transition-transform">
                        <img src="icons/instagram.svg" alt="Twitter" />
                      </button>
                    </div>
                    <div className="relative w-max">
                      <span className="absolute inset-0 bg-primary-dark border-4 border-primary-dark z-10"></span>
                      <button className="bg-natural-pink w-[45px] h-[45px] flex items-center justify-center -translate-y-[5px] translate-x-[5px] relative z-20 active:translate-x-0 active:translate-y-0 transition-transform">
                        <img src="icons/pinterest.svg" alt="Twitter" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="mb-5">Newsletter</h3>
                <form className="p-[51px] bg-natural-aqua border-4 border-primary-dark relative">
                  <img
                    src="illustrations/rocket.svg"
                    alt="rocket"
                    className="right-[30px] -top-[60px] absolute"
                  />

                  <input
                    type="mail"
                    className="inner-border-4 inner-border-primary-dark px-[30px] py-[22px] placeholder:text-natural-dark font-roboto-mono w-full mb-[30px]"
                    placeholder="your mail here"
                  />
                  <Button>Send Message</Button>
                </form>
              </div>
            </div>
            <nav className="flex items-center border-t-4 border-primary-dark divide-x-4 divide-primary-dark">
              <ul className="w-[40%] h-full bg-natural-cream py-5 px-14 flex items-center justify-center text-lg gap-16">
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/work"
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
              <ul className="w-[60%] h-full bg-natural-pink py-5 px-14 flex items-center justify-center text-lg gap-16">
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/licenses"
                  >
                    LICENSES
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/style-guide"
                  >
                    STYLE GUIDE
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-roboto-mono font-bold leading-[106.1%]"
                    to="/changelog"
                  >
                    CHANGELOG
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="side" />
        </div>
        <div className="mx-auto flex items-center justify-center">
          <div className="side h-[92px]" />
          <div className="content h-[92px] flex items-center justify-center">
            <p>
              Copyright © workment | Designed by VictorFlow Templates - Powered
              by Webflow
            </p>
          </div>
          <div className="side h-[92px] overflow-hidden">
            <a
              href="#top"
              className="bg-primary-dark w-full h-full items-center justify-center flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                fill="none"
                viewBox="0 0 14 14"
                className="-rotate-45"
              >
                <path
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  d="M0 1h13m0 0v13m0-13L1 13"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <span className="w-[1173px] h-[685px] bg-[#D2EBC3] rounded-full blur-[327px] block absolute z-10 -left-[113px] top-6" />
      <span className="w-[1087px] h-[685px] bg-[#C5D7EC] rounded-full blur-[327px] block absolute z-10 -right-[183px] -top-[478px]" />
    </footer>
  )
}
