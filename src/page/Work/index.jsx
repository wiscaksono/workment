import React, { useRef, useEffect, Fragment } from 'react'
import Navbar from '../../components/Navbar'
import gsap, { Linear } from 'gsap'
import DesignResearchConcept from '../../components/sticker/DesignResearchConcept'
import Button from '../../components/Button'
import { Disclosure, Transition } from '@headlessui/react'
import Footer from '../../components/Footer'

export default function Work() {
  return (
    <main className="py-10 overflow-x-hidden">
      <Navbar />
      <header className="bg-natural-wasabi relative">
        <div className="side flex-col gap-5">
          <h6 className="vertical-text">About Us</h6>
        </div>
        <div className="flex-1 px-[50px] flex items-center py-[130px] pb-24 gap-12 border-x-4 border-primary-dark relative">
          <h1 className="text-center w-full">
            One of the fastest <br /> growing agency
          </h1>
          <IconShapes />
          <div className="absolute -bottom-[83.5px] right-20 z-50">
            <DesignResearchConcept />
          </div>
        </div>
        <div className="side"></div>
      </header>

      <section className="bg-white">
        <div className="flex items-center w-full">
          <div className="side">
            <h6 className="vertical-text">WHO WE ARE</h6>
          </div>
          <div className="content flex items-center justify-center flex-col gap-2 py-32 px-14">
            <div className="w-full flex-1 flex items-center gap-12">
              <div className="flex-1">
                <div className="px-[71px] py-[68px] bg-natural-cream">
                  <img
                    src="agency/agency.png"
                    alt="Agency"
                    className="m-auto"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="mb-2.5">Building software for world changers</h1>
                <p className="text-justify mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its letter
                  smaking it look like readable English.
                </p>
                <div className="space-y-5 mb-12">
                  <div className="items-center flex gap-4">
                    <div className="w-4 h-4 bg-primary-dark rotate-45" />
                    <p>Readable content looking</p>
                  </div>
                  <div className="items-center flex gap-4">
                    <div className="w-4 h-4 bg-primary-dark rotate-45" />
                    <p>Readable content looking</p>
                  </div>
                </div>
                <Button href={'#'}>Get Started</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 border-y-4 border-primary-dark divide-x-4 divide-primary-dark "></div>
          </div>
          <div className="side" />
        </div>
      </section>

      <section className="bg-white">
        <div className="flex items-center w-full">
          <div className="side">
            <h6 className="vertical-text">VALUES</h6>
          </div>
          <div className="content flex items-center justify-center flex-col gap-2 py-32 px-36 bg-primary-dark">
            <h1 className="text-white text-center mb-11 leading-[47.64px]">
              Why should you <br /> work with us?
            </h1>
            <div className="w-full">
              <div className="mx-auto w-full divide-y-3 divide-white border-y-3 border-white">
                <DisclosureValue />
              </div>
            </div>
          </div>
          <div className="side" />
        </div>
      </section>

      <section className="bg-white">
        <div className="flex items-center w-full">
          <div className="side">
            <h6 className="vertical-text">VALUES</h6>
          </div>
          <div className="content flex items-center justify-center flex-col gap-2 py-32">
            <h1 className="text-center leading-[47.64px] mb-9">
              THE AMAZING TEAM BEHIND <br /> OUR AGENCY
            </h1>
            <div className="flex items-center justify-between w-full gap-8">
              <TeamCard
                img={'jackob'}
                name="JACOB HAMILTON"
                position="Developer"
              />
              <TeamCard img={'kevin'} name="KEVIN WELLS" position="Developer" />
              <TeamCard
                img={'dorothy'}
                name="DOROTHY HALL"
                position="Developer"
              />
            </div>
          </div>
          <div className="side" />
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  )
}

const DisclosureValue = () => {
  const values = [
    {
      title: '01. Creativity & Quality',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.',
    },
    {
      title: '02. Teamwork & Innovation',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.',
    },
    {
      title: '03. Agency Experience',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.',
    },
    {
      title: '04. Empathy in Action Simplicity',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its letter smaking it look like readable English.',
    },
  ]

  return (
    <>
      {values.map((value, index) => (
        <Disclosure as={`div`} className="py-9" key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none focus-visible:ring-0 items-center ">
                <h6 className="text-white">{value.title}</h6>
                <img
                  src="icons/arrow-right.svg"
                  alt="arrow right"
                  className={`${
                    open && 'rotate-90 filter-to-natural-pinaple'
                  } transition-all w-6 h-6`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-500"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <Disclosure.Panel className="text-white mt-4" as="p">
                  {value.desc}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </>
  )
}

const IconShapes = () => {
  let star = useRef()

  useEffect(() => {
    gsap
      .timeline({ repeat: -1, defaults: { duration: 20 } })
      .to([star.current], {
        rotate: 360,
        ease: Linear.easeNone,
      })
  }, [])

  return (
    <img
      src="shapes/star.svg"
      alt="Polygon"
      className="absolute top-14 right-24 filter-to-natural-green"
      ref={star}
    />
  )
}

const TeamCard = ({ img, name, position }) => {
  return (
    <div>
      <img src={`teams/${img}.png`} alt={name} className="mb-6 object-cover" />
      <div className="text-center">
        <h6>{name}</h6>
        <p>{position}</p>
      </div>
    </div>
  )
}
