import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-orange-500">MyApp</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-orange-500 transition duration-200"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-orange-500 transition duration-200"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
