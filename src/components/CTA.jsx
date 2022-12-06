import React from 'react'
import KeepSmileEveryday from './sticker/KeepSmileEveryday'
import { useNavigate } from 'react-router-dom'

export default function CTA() {
  const navigate = useNavigate()
  return (
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
  )
}
