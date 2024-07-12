// src/components/ProgramsSection.js
import React from "react";
import image1 from "../img/image1.png"; // Sesuaikan path dengan file gambar
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.png";

const ProgramsSection = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Program TechSolutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image1}
            alt="Beasiswa dan Sertifikasi International"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">
              Beasiswa dan Sertifikasi International
            </h3>
            <p className="text-gray-600">DEVHANDAL 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image2}
            alt="Belajar Jadi Hacker"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Belajar Jadi Hacker</h3>
            <p className="text-gray-600">
              Latihan Aplikasi, Studi Kasus Nyata, Praktek Intensif
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image3}
            alt="Belajar Jadi Fullstack Developer"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">
              Belajar Jadi Fullstack Developer
            </h3>
            <p className="text-gray-600">Dengan Terarah</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
