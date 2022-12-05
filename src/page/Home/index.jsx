import gsap, { Linear } from 'gsap'
import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import DesignResearchConcept from '../../components/sticker/DesignResearchConcept'
import works from '../../data/works.json'
import KeepSmileEveryday from '../../components/sticker/KeepSmileEveryday'

export default function Home() {
  return (
    <main className="bg-natural-aqua pt-10">
      <div className="relative z-20">
        <Navbar />
        <header className="bg-natural-cream relative">
          <div className="side flex-col gap-5">
            <a href="">
              <img src="icons/pinterest.svg" alt="" />
            </a>
            <a href="">
              <img src="icons/twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="icons/facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="icons/instagram.svg" alt="" />
            </a>
          </div>
          <div className="flex-1 px-[50px] flex items-center justify-between py-[87px] pb-24 gap-12 border-x-4 border-primary-dark relative">
            <div className="flex flex-col flex-1">
              <div className="mb-11">
                <h1 className="display mb-2.5 uppercase">
                  Technology <br />& Design
                </h1>
                <h3 className="px-[26px] py-[14px] rounded-full border-4 border-primary-dark bg-primary-yellow w-max">
                  STUDIO
                </h3>
              </div>
              <p className="mb-8">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="flex-1">
              <img src="work-banner.png" alt="" />
            </div>
            <IconShapes />
          </div>
          <div className="side"></div>
          <div className="absolute right-[22px] top-1/2 -translate-y-1/2 z-50">
            <DesignResearchConcept />
          </div>
        </header>

        <section className="bg-white border-b-0">
          <div className="flex items-center w-full">
            <div className="side">
              <h6 className="vertical-text">What We Can Do For You</h6>
            </div>
            <div className="content flex items-center justify-center flex-col gap-2">
              <div className="pt-[140px] pb-[95px] w-full flex-1">
                <div className="relative">
                  <h1 className="text-center">WE CAN HELP YOU WITH</h1>
                  <img
                    src="icons/gear.svg"
                    alt="Gear"
                    className="absolute right-44 top-1/2 -translate-y-1/2"
                  />
                </div>
                <p className="text-center">
                  Lorem Ipsum is simply dummy text of the <br /> printingand
                  typesetting industry.
                </p>
              </div>

              <div className="grid grid-cols-3 border-y-4 border-primary-dark divide-x-4 divide-primary-dark ">
                <Card
                  icon="megaphone"
                  title="ONLINE MARKETING"
                  desc="Long established fact that a reader will be distracted by the readable design
                      content layout."
                />
                <Card
                  icon="planet"
                  title="TECHNOLOGY"
                  desc="Long established fact that a reader will be distracted by the readable design
                      content layout."
                />
                <Card
                  icon="business"
                  title="BUSINESS"
                  desc="Long established fact that a reader will be distracted by the readable design
                      content layout."
                />
              </div>

              <button className="bg-primary-dark py-8 w-full font-syncopate font-bold text-lg text-white flex gap-2 items-center justify-center mt-[60px] mb-40">
                MORE SERVICES
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1H13M13 1V14M13 1L1 13"
                    stroke="#FFF969"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="side" />
          </div>
        </section>

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

        <section className="bg-white border-b-0 relative overflow-hidden">
          <div className="w-[739px] h-[428px] rounded-full bg-natural-wasabi/50 blur-3xl absolute -left-[369px] -top-[214px]" />
          <div className="w-[539px] h-[428px] rounded-full bg-natural-pink/40 blur-3xl absolute -left-[369px] top-1/2 -translate-y-1/3" />
          <div className="w-[739px] h-[428px] rounded-full bg-natural-taro/50 blur-3xl absolute -right-[369px] top-[300px]" />
          <div className="flex w-full">
            <div className="side">
              <h6 className="vertical-text">Some of our finest work</h6>
            </div>
            <div className="flex px-[58px] pt-[51px] pb-[142px] gap-[53px] content flex-col relative z-20">
              {works.slice(0, 3).map(work => (
                <WorkPost
                  key={work.id}
                  title={work.title}
                  desc={work.desc}
                  href={work.id}
                  image={work.image}
                  tag={work.tag}
                />
              ))}
              <div className="flex items-center justify-center mt-[88px]">
                <Button>more project</Button>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>

        <section className="bg-primary-dark border-b-0 relative overflow-hidden">
          <div className="flex w-full">
            <div className="side" />
            <div className="flex py-32 content flex-col relative z-20">
              <div>
                <h1 className="text-white text-center mb-2">
                  What makes us special?
                </h1>
                <p className="mb-8 text-white text-center text-xl">
                  Lorem Ipsum is simply dummy text of the <br /> printingand
                  typesetting industry.
                </p>
              </div>

              <div className="grid grid-cols-4 border-4 border-white divide-x-4 divide-white">
                <div>
                  <div
                    className="m-6 hover:bg-primary-yellow px-7 py-5 transition-colors group"
                    id="we-are-special"
                  >
                    <p className="text-outline text-center">50+</p>
                    <p className="text-center text-white group-hover:text-primary-dark text-base">
                      Years operation
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="m-6 hover:bg-primary-yellow px-7 py-5 transition-colors group"
                    id="we-are-special"
                  >
                    <p className="text-outline text-center">360</p>
                    <p className="text-center text-white group-hover:text-primary-dark text-base">
                      Project Delivery
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="m-6 hover:bg-primary-yellow px-7 py-5 transition-colors group"
                    id="we-are-special"
                  >
                    <p className="text-outline text-center">600+</p>
                    <p className="text-center text-white group-hover:text-primary-dark text-base">
                      Specialist
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="m-6 hover:bg-primary-yellow px-7 py-5 transition-colors group"
                    id="we-are-special"
                  >
                    <p className="text-outline text-center">75+</p>
                    <p className="text-center text-white group-hover:text-primary-dark text-base">
                      Awards Exellency
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>

        <section className="relative overflow-hidden border-b-0">
          <div className="flex w-full">
            <div className="side">
              <h6 className="vertical-text">Testimonials</h6>
            </div>
            <div className="flex py-52 content bg-natural-pink items-center justify-center relative">
              <div></div>
              <img
                src="shapes/quote.svg"
                alt="Quote"
                className="absolute top-[90px] left-[204px]"
              />
              <img
                src="shapes/book.svg"
                alt="Book"
                className="absolute top-[30px] right-20"
              />
              <img
                src="shapes/chats.svg"
                alt="Book"
                className="absolute top-[120px] right-12"
              />
              <div className="relative group">
                <span className="absolute inset-0 border-4 border-primary-dark z-10" />
                <span className="absolute bg-white inset-0 border-4 border-primary-dark z-20 translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                <div className="px-[45px] py-[72px] bg-primary-dark flex items-center justify-center gap-10 relative z-30 translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                  <img src="users/jay-reinemann.png" alt="" />
                  <div>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <p className="text-lg text-white font-bold uppercase mb-[1px]">
                          Jay Reinemann
                        </p>
                        <p className="text-base text-white">General Partner</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                        <img src="icons/star.svg" alt="" />
                      </div>
                    </div>
                    <div className="max-w-[500px] mt-[14px]">
                      <p className="text-white pt-[22px] border-t-[3px] border-white font-normal">
                        Long established fact that a reader will be distracted
                        by designcontent layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>

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
      </div>

      <div className="relative bg-[#F4F4F4] overflow-x-hidden pb-10">
        <div className="bg-[#C1C6FF] w-[789px] h-[685px] rounded-full blur-[124px] absolute -left-[391px] -top-[329px] z-10" />
        <div className="bg-[#FFB7F3] w-[739px] h-[1200px] rounded-full blur-[124px] absolute -right-[481px] top-[620px] z-10" />
        <div className="bg-[#FFE2C7] w-[789px] h-[685px] rounded-full blur-[124px] absolute -left-[268px] bottom-[1303px] z-10" />
        <section className="relative overflow-hidden bg-white z-20">
          <div className="flex w-full">
            <div className="side">
              <h6 className="vertical-text">About US</h6>
            </div>
            <div className="flex content justify-center">
              <div className="w-1/2 bg-[#7ADC8F] h-full pt-28 pb-40 pl-9 pr-[26px]">
                <img src="illustrations/content.svg" alt="Line" />
              </div>
              <div className="w-1/2 ml-[37px] mt-[130px] mr-4">
                <h1 className="mb-3">Unique Solutions for You Business</h1>
                <p className="mb-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  <br />
                  <br />
                  of letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop
                </p>
                <Button>About Agency</Button>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white z-20">
          <div className="flex w-full">
            <div className="side">
              <h6 className="vertical-text">AWARDS</h6>
            </div>
            <div className="flex content justify-center py-32 px-16">
              <div className="w-1/2 flex flex-col gap-[70px] pr-[77px]">
                <div>
                  <p className="font-bold text-[22px] text-natural-dark mb-4">
                    2018
                  </p>
                  <h3 className="mb-[14px]">Designers meeting</h3>
                  <p>
                    It is a long established fact that reader will be distracted
                    readable content of when looking.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[22px] text-natural-dark mb-4">
                    2020
                  </p>
                  <h3 className="mb-[14px]">Service design</h3>
                  <p>
                    It is a long established fact that reader will be distracted
                    readable content of when looking.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[22px] text-natural-dark mb-4">
                    2021
                  </p>
                  <h3 className="mb-[14px]">Packaging</h3>
                  <p>
                    It is a long established fact that reader will be distracted
                    readable content of when looking.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[22px] text-natural-dark mb-4">
                    2021
                  </p>
                  <h3 className="mb-[14px]">Packaging</h3>
                  <p>
                    It is a long established fact that reader will be distracted
                    readable content of when looking.
                  </p>
                </div>
              </div>
              <div className="w-1/2 relative">
                <span className="absolute inset-0 border-4 border-primary-dark z-10"></span>
                <span className="absolute inset-0 border-4 border-primary-dark z-10 translate-x-3 -translate-y-3 bg-primary-dark"></span>
                <video
                  controls
                  width={`100%`}
                  muted
                  className="translate-x-6 -translate-y-6 z-30 relative"
                >
                  <source
                    type="video/mp4"
                    src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
                  />
                </video>
              </div>
            </div>
            <div className="side" />
          </div>
        </section>

        <section className="relative overflow-hidden bg-natural-cream border-b-0 z-20">
          <div className="flex w-full">
            <div className="side">
              <h6 className="vertical-text">NEWS</h6>
            </div>
            <div className="flex flex-col content justify-center py-[133px] px-[52px] relative items-center">
              <img
                src="shapes/blog.svg"
                alt="Blog"
                className="absolute top-20 right-[173px]"
              />
              <div className="text-center mb-11">
                <h1 className="mb-1.5">Latest news</h1>
                <p>
                  It is a long established fact that a reader <br /> will be
                  distracted by the readable.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 items-center justify-center mb-14">
                <Link className="relative group">
                  <span className="absolute inset-0 border-4 border-primary-dark bg-primary-dark z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform" />
                  <div className="relative z-20">
                    <div className="py-[35px] px-[38px] bg-[#8DBAB6]">
                      <img
                        src="blog/blog-1.png"
                        alt=""
                        className="border-4 border-primary-dark"
                      />
                    </div>
                    <div className="bg-white">
                      <div className="grid grid-cols-2 divide-x-4 divide-primary-dark">
                        <div className="py-2 px-6 flex items-center gap-1">
                          <img src="icons/chat.svg" alt="" />
                          <p className="font-bold leading-[119.1%] text-lg text-natural-dark">
                            John Smith
                          </p>
                        </div>
                        <div className="py-2 px-6 flex items-center gap-1">
                          <img src="icons/calendar.svg" alt="" />
                          <p className="font-bold leading-[119.1%] text-lg text-natural-dark">
                            June 15, 2022
                          </p>
                        </div>
                      </div>
                      <div className="px-9 py-8 flex flex-col gap-6 border-t-4 border-primary-dark">
                        <h4 className="line-clamp-3">
                          Range input with completely custom design styles
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="39"
                          height="39"
                          fill="none"
                          viewBox="0 0 14 14"
                          className="self-end group-hover:rotate-45 transition-transform"
                        >
                          <path
                            stroke="#2E2E2E"
                            strokeWidth="2"
                            d="M0 1h13m0 0v13m0-13L1 13"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="relative group">
                  <span className="absolute inset-0 border-4 border-primary-dark bg-primary-dark z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform" />
                  <div className="relative z-20">
                    <div className="py-[35px] px-[38px] bg-[#63A2DC]">
                      <img
                        src="blog/blog-2.png"
                        alt=""
                        className="border-4 border-primary-dark"
                      />
                    </div>
                    <div className="bg-white">
                      <div className="grid grid-cols-2 divide-x-4 divide-primary-dark ">
                        <div className="py-2 px-6 flex items-center gap-1">
                          <img src="icons/chat.svg" alt="" />
                          <p className="font-bold leading-[119.1%] text-lg text-natural-dark">
                            John Smith
                          </p>
                        </div>
                        <div className="py-2 px-6 flex items-center gap-1">
                          <img src="icons/calendar.svg" alt="" />
                          <p className="font-bold leading-[119.1%] text-lg text-natural-dark">
                            June 15, 2022
                          </p>
                        </div>
                      </div>
                      <div className="px-9 py-8 flex flex-col gap-6 border-t-4 border-primary-dark">
                        <h4 className="line-clamp-4">
                          Range input with completely custom design styles
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="39"
                          height="39"
                          fill="none"
                          viewBox="0 0 14 14"
                          className="self-end group-hover:rotate-45 transition-transform"
                        >
                          <path
                            stroke="#2E2E2E"
                            strokeWidth="2"
                            d="M0 1h13m0 0v13m0-13L1 13"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <Button transparent={true} href="/blog">
                More Blog
              </Button>
            </div>
            <div className="side" />
          </div>
        </section>

        <section className="bg-natural-dark max-w-full flex items-center justify-center border-0 bg-footer-patern bg-cover z-20 relative">
          <div className="max-w-[1400px] max-auto py-36 relative w-full">
            <KeepSmileEveryday className="absolute left-0 top-1/2 -translate-y-1/2" />
            <div className="flex items-center justify-center flex-col">
              <p className="text-white mb-4">Need a successful people?</p>
              <h1 className="text-white mb-[69px]">Lets Work Together</h1>
              <div className="relative">
                <div
                  className={`px-[35px] py-[26px] absolute inset-0 w-max font-syncopate text-white text-lg font-bold flex items-center gap-2 inner-border-4 inner-border-white leading-[106.1%] uppercase`}
                >
                  ESTIMATE PROJECT
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4}
                    stroke="currentColor"
                    className="w-6 h-6 text-natural-pinaple"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>

                <button
                  className="px-[35px] py-[26px] bg-white w-max font-syncopate text-primary-dark text-lg font-bold flex items-center gap-2 -translate-y-3 translate-x-3 leading-[106.1%] group active:translate-x-0 active:translate-y-0 transition-transform uppercase"
                  onClick={() => navigate(`/project`)}
                >
                  ESTIMATE PROJECT
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-x-4 border-b-4 border-primary-dark max-w-[1400px] mx-auto">
          <div className="mx-auto flex items-center justify-center border-b-4 border-primary-dark">
            <div className="side" />
            <div className="content">
              <div className="flex gap-[112px] pb-20 px-16 pt-[120px]">
                <div className="w-1/2">
                  <div className="mb-14">
                    <div className="flex items-center gap-[14px]">
                      <img src="icons/logo.svg" alt="Workment Logo" />
                      <h2>Workment</h2>
                    </div>
                    <p>
                      It is a long established fact that reader will be
                      distracted readable content of when looking.
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
                Copyright © workment | Designed by VictorFlow Templates -
                Powered by Webflow
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
        </footer>
      </div>
    </main>
  )
}

const Card = ({ icon, title, desc, href }) => {
  return (
    <div className="px-[38px] pb-[56px] pt-[92px] hover:bg-natural-cream transition-colors relative group">
      <div className="absolute -top-[42px]">
        <div className="relative">
          <div className="w-[92px] h-[92px] flex items-center justify-center rounded-full border-4 border-primary-dark bg-white group-hover:bg-natural-cream z-50 absolute group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
            <img src={`icons/${icon}.svg`} alt={icon} />
          </div>
          <div className="w-[92px] h-[92px] bg-primary-dark rounded-full absolute top-0 z-0"></div>
        </div>
      </div>
      <h6 className="uppercase mb-[22px]">{title}</h6>
      <p className="mb-[51px]">{desc}</p>
      <ButtonWithArrow href={href}>Read More</ButtonWithArrow>
    </div>
  )
}

const ButtonWithArrow = ({ children, href }) => {
  return (
    <a
      href={href}
      className="font-syncopate font-bold gap-2.5 flex items-center cursor-pointer uppercase group"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 14 14"
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      >
        <path
          stroke="#2E2E2E"
          strokeWidth="2"
          d="M0 1h13m0 0v13m0-13L1 13"
        ></path>
      </svg>
    </a>
  )
}

const WorkPost = ({ title, desc, href, image, tag }) => {
  return (
    <div className="flex gap-[53px]">
      <article className="w-[40%] flex flex-col gap-[30px]">
        <div className="border-primary-dark">
          <h3>{title}</h3>
          <p>{tag}</p>
        </div>
        <p className="pt-[20px] border-t-4 border-primary-dark">{desc}</p>
        <ButtonWithArrow href={href}>View Project</ButtonWithArrow>
      </article>
      <div className="w-[60%] min-h-full bg-gray-100 relative group">
        <span className="absolute inset-0 border-4 border-dashed border-primary-dark z-10"></span>
        <img
          src={`projects/${image}.png`}
          className="w-full h-full aspect-square object-cover relative z-20 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform border-4 border-primary-dark"
          alt=""
        />
      </div>
    </div>
  )
}

const IconShapes = () => {
  let polygon = useRef()
  let star = useRef()

  useEffect(() => {
    gsap
      .timeline({ repeat: -1, defaults: { duration: 20 } })
      .to([star.current, polygon.current], {
        rotate: 360,
        ease: Linear.easeNone,
      })
  }, [])

  return (
    <>
      <img
        src="shapes/polygon.svg"
        alt="Polygon"
        className="left-[47px] top-[25px] absolute"
        ref={polygon}
      />
      <img
        src="shapes/star.svg"
        alt="Polygon"
        className="absolute bottom-[73px] left-[367px]"
        ref={star}
      />
    </>
  )
}
