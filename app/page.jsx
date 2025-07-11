'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* === Hero Section === */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm md:text-base text-gray-200 mb-2">
            Christian Counseling Services in Richmond &amp; Central Virginia
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

      {/* === Services Section === */}
      <section className="bg-[#F9F6EF] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12 text-gray-800">Areas of Focus</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[{
              title: 'Therapy for Healthcare Providers and Students',
              desc: `We help you process burnout, imposter syndrome, or people-pleasing patterns. Whether you’re in training or experienced in healthcare, we tailor therapy for your unique challenges.`,
              img: '/images/healthcare.jpg',
            }, {
              title: 'Therapy for Trauma and Grief',
              desc: `We provide space to heal from traumatic events or deep losses. Gain clarity, compassion, and a greater sense of peace through guided reflection and emotional support.`,
              img: '/images/trauma.jpg',
            }, {
              title: 'Therapy for Second Generation Individuals in Immigrant Families',
              desc: `Explore your identity and navigate cultural expectations. We offer supportive counseling for those growing up between two worlds and managing complex family dynamics.`,
              img: '/images/immigrant.jpg',
            }].map(({ title, desc, img }, i) => (
              <div key={i} className="flex flex-col items-center text-gray-800">
                <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg mb-4">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2 text-lg text-center">{title}</h3>
                <p className="text-sm text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ Section === */}
      <section className="bg-[#B5DCE0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[{
              q: 'Do you accept insurance?',
              a: 'No, but a superbill is provided for self-submission.'
            }, {
              q: 'Are online sessions available?',
              a: 'Yes—all virtual sessions via Zoom.'
            }, {
              q: 'What is your cancellation policy?',
              a: '24-hour notice required.'
            }].map((item, idx) => (
              <details key={idx} className="bg-white rounded shadow p-4">
                <summary className="font-semibold cursor-pointer text-lg text-gray-800">{item.q}</summary>
                <p className="mt-2 text-sm text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === Contact Section === */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border border-green-800 p-8">
          <h2 className="text-3xl font-semibold text-center text-green-900 mb-4">Get In Touch</h2>
          <p className="text-center text-gray-700 mb-8">
            Fill out the form and I’ll reach out within one business day. Your message is safe and private.
          </p>
          <div className="text-center text-xl md:text-2xl font-bold text-green-900 mb-8">
            <p>$200 / Individual Session</p>
            <p>$240 / Couples Session</p>
          </div>
          <form className="space-y-4">
            <input className="w-full border border-green-700 px-4 py-2 rounded-md" placeholder="Your Name" />
            <input className="w-full border border-green-700 px-4 py-2 rounded-md" placeholder="Email" />
            <textarea className="w-full border border-green-700 px-4 py-2 rounded-md" placeholder="Your Message" rows="4"></textarea>
            <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-900">Send</button>
          </form>
        </div>
      </section>

      {/* === Map & Contact Details === */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.086263938949!2d-118.26173698478214!3d34.0772240805936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c78d8e3eaf37%3A0x13a801ad2c56cde0!2s1287%20Maplewood%20Dr%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-gray-800 space-y-4">
            <h3 className="text-2xl font-bold">Dr. Serena Blake, PsyD (Clinical Psychologist)</h3>
            <p><strong>📍 Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+13235550192" className="text-blue-600 underline">(323) 555-0192</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></p>
            <div>
              <p><strong>🕒 Office Hours:</strong></p>
              <ul className="list-disc ml-5">
                <li><strong>In-person:</strong> Tue &amp; Thu, 10 AM–6 PM</li>
                <li><strong>Virtual via Zoom:</strong> Mon, Wed &amp; Fri, 1 PM–5 PM</li>
              </ul>
            </div>
            <p><strong>🧠 Experience:</strong> 8 years of practice, 500+ sessions</p>
          </div>
        </div>
      </section>
    </main>
  )
}
