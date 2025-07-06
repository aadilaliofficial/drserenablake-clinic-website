'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* === Hero Section === */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm md:text-base text-gray-200 mb-2">
            Christian Counseling Services in Richmond & Central Virginia
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Professional Counseling for Christian Healing and Growth
          </h1>
          <p className="text-lg mb-2">
            Begin your journey today towards spiritual growth, deeper relationships,
            <br />
            and lasting inner peace.
          </p>
          <p className="font-semibold text-white mt-4">
            I want to work with you for...
            <br />
            <span className="text-sky-200 font-bold text-lg">
              Greater Purpose in Your Life Direction
            </span>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span>⭐ Top Rated</span>
            <span>• 40+ Years Experience</span>
            <span>• Testimonials</span>
            <span>• Media Mentions</span>
          </div>
          <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Start Healing Today
          </button>
        </div>
      </section>

      {/* === About Section === */}
      <section className="bg-[#B5DCE0] py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-64 h-72 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <Image src="/images/about.jpg" width={256} height={288} alt="About Ellie" />
          </div>

          <div className="flex-1">
            <p className="text-sm mb-1 text-yellow-800 font-medium bg-yellow-100 px-2 py-1 inline-block rounded">
              About Therapist: Dr. Serena Blake, PsyD (Clinical Psychologist)
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Hi I&apos;m Serena Blake</h2>
            <p className="mb-4">
              Dr. Serena Blake is a licensed <strong>clinical psychologist (PsyD)</strong> based in Los Angeles, CA,
              with <strong>eight years of experience and over 500 client sessions.</strong>
            </p>
            <p className="mb-4">
              She blends evidence-based approaches—like <strong>cognitive-behavioral therapy and mindfulness—with
              compassionate</strong>, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="mb-4">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
              creating a <strong>safe, supportive space</strong> for you to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* === Other Sections (Services, FAQ, Contact, Map) are unchanged and assumed valid */}
    </main>
  )
}
