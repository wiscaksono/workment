import React from 'react'

export default function Statistics() {
  return (
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
  )
}
