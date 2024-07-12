// pages/LoginPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg"; // Sesuaikan path dengan file gambar logo
import background from "../img/2.jpg"; // Sesuaikan path dengan file gambar background

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center relative">
      <div
        className="bg-cover bg-center absolute inset-0 z-0"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative bg-black bg-opacity-50 p-10 rounded-lg shadow-lg z-10 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-center mb-8 flex items-center justify-center">
            <img src={logo} alt="logo" className="h-16 w-16 mr-4" />
            <h1 className="text-4xl font-bold text-white">TechSolutions</h1>
          </div>
          <p className="text-gray-300">Selamat datang kembali!</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Masukkan username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Belum punya akun? Daftar
              <FontAwesomeIcon icon={faUserPlus} className="ml-2" />
            </a>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Lupa kata sandi?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Masuk
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
              type="button"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Kembali
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-300">Atau</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
              type="button"
            >
              Masuk dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
