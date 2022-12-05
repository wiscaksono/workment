import React, { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Marquee from "react-fast-marquee";
import works from "../../data/works.json";
import { CircleIcon } from "../../components/CircleIcon";
import gsap, { Linear } from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Home() {
  return (
    <main className="bg-natural-aqua">
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
          <CircleIcon />
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
            {works.slice(0, 3).map((work) => (
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
                      Long established fact that a reader will be distracted by
                      designcontent layout.
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
        className="bg-natural-aqua border-y-4 border-primary-dark  overflow-hidden"
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

      <section className="relative overflow-hidden bg-white">
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
    </main>
  );
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
  );
};

const ButtonWithArrow = ({ children, href }) => {
  return (
    <a
      href={href}
      className="font-syncopate font-bold gap-2.5 flex items-center cursor-pointer uppercase "
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
  );
};

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
  );
};

const IconShapes = () => {

  let polygon = useRef();
  let star = useRef();

  useEffect(() => {
    gsap
      .timeline({ repeat: -1, defaults: { duration: 20 } })
      .to([star.current, polygon.current], {
        rotate: 360,
        ease: Linear.easeNone
      });
  }, []);

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
  );
};
