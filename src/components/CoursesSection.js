// src/components/CoursesSection.js
import React from "react";
import image4 from "../img/image4.png"; // Sesuaikan path dengan file gambar
import image5 from "../img/image5.png";
import image6 from "../img/image6.png";
import image7 from "../img/image7.png";

const CoursesSection = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Beragam Roadmap Belajar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image4}
            alt="Jagoan PostgreSQL"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Jagoan PostgreSQL</h3>
            <p className="text-gray-600">12 Video</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image5}
            alt="Jagoan TypeScript"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Jagoan TypeScript</h3>
            <p className="text-gray-600">8 Video</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image6}
            alt="Jagoan Redis"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Jagoan Redis</h3>
            <p className="text-gray-600">15 Video</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image7}
            alt="Jagoan Elasticsearch"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Jagoan Elasticsearch</h3>
            <p className="text-gray-600">10 Video</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
