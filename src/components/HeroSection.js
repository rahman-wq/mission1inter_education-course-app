// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto p-6 text-center bg-green-600 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Dapat Kerja IT Lebih Cepat Meskipun Bukan Background IT
      </h1>
      <p className="mb-4">
        Mission-Based Learning TechSolutions didesain agar kamu gak males
        belajar & bisa lebih cepat dapat kerja.
        <br />
        Dalam 2.5 Tahun TechSolutions telah membantu beberapa alumni meraih
        karir impiannya lebih cepat.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
        Mulai Sekarang
      </button>
      <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mx-2">
        Tanya CS
      </button>
    </section>
  );
};

export default HeroSection;
