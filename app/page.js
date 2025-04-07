'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-400 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-cyan-600">Aquaglow</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-cyan-600 font-medium">Home</a>
          <a href="#about" className="hover:text-cyan-600 font-medium">About Us</a>
          <a href="#contact" className="hover:text-cyan-600 font-medium">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {navOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
            <a href="#home" className="py-2 text-cyan-600">Home</a>
            <a href="#about" className="py-2 text-cyan-600">About Us</a>
            <a href="#contact" className="py-2 text-cyan-600">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-20 bg-cyan-200">
      <Image
          src="/images/Aqua_image_1.jpg"
          alt="Aquaglow Bottle"
          width={300}
          height={400}
          className="rounded-xl mb-10"
        />
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-cyan-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Refresh with Aquaglow
        </motion.h2>
        <p className="text-lg md:text-2xl text-gray-600 max-w-xl">
          Pure bottled water and delightful flavoured water. Stay hydrated, stay vibrant with Aquabloom.
        </p>

      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12">    
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/Aqua_image_2.jpg"
              alt="Aquaglow bottle"
              width={300}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 md:-mt-12 w-full">
            <h2 className="text-5xl font-bold text-cyan-700 text-center mb-4 md:text-left">Aquaglow</h2>
            <p className="text-gray-600 text-2xl leading-relaxed mb-4">
              Aquaglow is your go-to premium bottled water brand committed to refreshing lives with pure hydration. 
              We bring you crisp, clean water sourced and filtered to perfection.
            </p>
            <p className="text-gray-600 leading-relaxed text-2xl">
              Looking for something more exciting? Try <span className="text-pink-500 font-semibold">Aquabloom</span> — our line of naturally flavored water, 
              perfect for those who love a touch of fruity freshness.
            </p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">    
          <div className="md:w-1/2 md:-mt-12 w-full">
            <h2 className="text-5xl font-bold text-cyan-700 text-center mb-4 md:text-left">Aquabloom</h2>
            <p className="text-gray-600 text-2xl leading-relaxed mb-4">
              Aquaglow is your go-to premium bottled water brand committed to refreshing lives with pure hydration. 
              We bring you crisp, clean water sourced and filtered to perfection.
            </p>
            <p className="text-gray-600 leading-relaxed text-2xl">
              And for a twist? Try <span className="text-pink-500 font-semibold">Aquabloom</span> — our line of naturally flavored water, 
              perfect for those who love a touch of fruity freshness.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/Aqua_image_3.jpg"
              alt="Aquaglow bottle"
              width={200}
              height={200}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      {/* <section id="contact" className="px-6 py-16 bg-cyan-100">
        <h3 className="text-3xl font-semibold text-center text-cyan-700 mb-6">Contact</h3>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700"
          >
            Send Message
          </button>
        </form>
      </section> */}

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-white">
        &copy; {new Date().getFullYear()} Aquaglow. All rights reserved.
      </footer>
    </main>
  );
}
