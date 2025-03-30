import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between transition-all ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
            } shadow-md`}
        >
            {/* Left Side - Navigation Links */}
            <ul className="flex gap-6 text-lg font-medium">
                <li className="hover:text-red-600 transition cursor-pointer">Models</li>
                <li className="hover:text-red-600 transition cursor-pointer">History</li>
                <li className="hover:text-red-600 transition cursor-pointer">
                    Experience
                </li>
            </ul>

            {/* Center - Porsche Name */}
            <h1 className="text-3xl font-bold tracking-wide uppercase">Porsche</h1>

            {/* Right Side - Icons & Button */}
            <div className="flex gap-4 items-center">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-xl transition"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                {/* Test Drive Button */}
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                    Test Drive 🚗
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
