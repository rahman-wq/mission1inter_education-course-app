// src/components/ArticlesSection.js
import React from "react";
import image8 from "../img/image8.jpg"; // Sesuaikan path dengan file gambar
import image9 from "../img/image9.png";
import image10 from "../img/image10.png";
import image11 from "../img/image11.png";

const ArticlesSection = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Berbagai Artikel untuk-mu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image8}
            alt="Sertifikasi Alibaba Cloud"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">
              Sertifikasi Alibaba Cloud
            </h3>
            <p className="text-gray-600">12 Juli 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image9}
            alt="Kisah Kevin Systrom"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Kisah Kevin Systrom</h3>
            <p className="text-gray-600">12 Juli 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image10}
            alt="Update Versi Android Studio"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">
              Update Versi Android Studio
            </h3>
            <p className="text-gray-600">12 Juli 2024</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded overflow-hidden">
          <img
            src={image11}
            alt="Rahasia Menjadi Programer"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">
              Rahasia Menjadi Programer
            </h3>
            <p className="text-gray-600">12 Juli 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
