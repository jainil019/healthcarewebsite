import { useState } from "react";
import { Link } from "react-router-dom";
import About from "../pages/about";
function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="relative bg-health-green text-white shadow-md">
            <div className="mx-auto flex max-w-7xl item-center justify-between px-4 py-4 lg:px-8">
                <a href="#" className="text-2xl font-bold">
                HealthScope
                </a>
                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 lg:flex">
                    <Link
                        to="/"
                        className="transition hover:text-gray-200"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="transition hover:text-gray-200"
                    >
                        About
                    </Link>

                    <Link
                        to="/event"
                        className="transition hover:text-gray-200"
                    >
                        Events
                    </Link>

                    <Link
                        to="/news"
                        className="transition hover:text-gray-200"
                    >
                        News
                    </Link>

                    <Link
                        to="/blog"
                        className="transition hover:text-gray-200"
                    >
                        Blog
                    </Link>

                    <Link
                        to="/press"
                        className="transition hover:text-gray-200"
                    >
                        Press-Realese
                    </Link>
                    <Link
                        to="/testimonial"
                        className="transition hover:text-gray-200"
                    >
                        Testimonial 
                    </Link>

                    <Link
                        to="/contact"
                        className="transition hover:text-gray-200"
                    >
                        Contact
                    </Link>
                    </div>
                  {/* Mobile Menu Button */}
                
                <button
                type="button"
                onClick={()=>setMenuOpen(!menuOpen)}
                className="text-2xl lg:hidden">
                    {menuOpen ? "✕" : "☰"}
                </button>

                {menuOpen&&(
                    <div className="absolute left-0 top-full z-50 w-full bg-health-green px-4 pb-5 lg:hidden">
                        <div className="flex flex-col gap-2">
                             <Link
                                    to="/"
                                    className="transition hover:text-gray-200"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    className="transition hover:text-gray-200"
                                >
                                    About
                                </Link>

                                <Link
                                    to="/events"
                                    className="transition hover:text-gray-200"
                                >
                                    Events
                                </Link>

                                <Link
                                    to="/news"
                                    className="transition hover:text-gray-200"
                                >
                                    News
                                </Link>

                                <Link
                                    to="/blog"
                                    className="transition hover:text-gray-200"
                                >
                                    Blog
                                </Link>

                                <Link
                                    to="/contact"
                                    className="transition hover:text-gray-200"
                                >
                                    Contact
                                </Link>

                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}
export default Navbar;