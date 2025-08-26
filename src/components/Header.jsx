import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { to: '/about', label: 'Hakkımızda' },
        { to: '/team', label: 'Ekibimiz' },
        { to: '/treatments', label: 'Tedaviler' },
        {
            label: 'Araştırma & İnovasyon',
            submenu: [
                { to: '/research', label: 'Araştırmalarımız' },
                { to: '/innovation', label: 'İnovasyonlar' },
                { to: '/projects', label: 'Projelerimiz' }
            ]
        },
        { to: '/media', label: 'Medya' },
        { to: '/sponsors', label: 'Partnerler' },
        { to: '/faq', label: 'SSS' },
        { to: '/news', label: 'Haberler' },
        { to: '/contact', label: 'İletişim' },
        { to: '/appointment', label: 'Randevu Al' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Omurga Kliniği
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative group">
                            {link.submenu ? (
                                <>
                                    <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                                        {link.label}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        {link.submenu.map((sublink) => (
                                            <NavLink
                                                key={sublink.to}
                                                to={sublink.to}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : ''
                                                    }`
                                                }
                                            >
                                                {sublink.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-medium' : ''
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
                        <div className="py-4 px-6 space-y-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600 font-medium' : ''
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
