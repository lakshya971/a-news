import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const navItems = {
        "News": ["India", "World", "Crime"],
        "State": ["Uttar Pradesh", "Bihar", "Delhi NCR", "Maharashtra", "Rajasthan", "Gujarat"],
        "Entertainment": ["Bollywood", "OTT", "Regional Cinema", "Television"],
        "Sports": ["IPL", "Cricket", "Football", "Hockey"],
        "Business": ["Stock Market", "Personal Finance", "Crypto", "IPO"],
        "Technology": ["Mobile", "Gadgets", "ChatGPT"],
        "Lifestyle": ["Health", "Travel", "Food", "Fashion"],
        "Education": ["Results", "Jobs"],
        "Astrology": ["Horoscope", "Religion", "Numerology"],
        "Weather" : ["Forecast", "Climate"],
        "Videos": ["Latest", "Trending", "Interviews"],
        "Opinion": ["Editorials", "Columns", "Blogs"],
        "Trending": ["Top Stories", "Viral News", "Social Media"]
    };

    return (
        <header 
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform ${
                visible ? 'translate-y-0' : '-translate-y-full'
            } ${
                prevScrollPos > 10 
                    ? 'bg-white/90 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
            }`}
            style={{
                willChange: 'transform'
            }}
            role="banner"
        >
            <div className="container bg-white mx-auto flex h-16 items-center justify-evenly px-4 relative">
                {/* Logo */}
                <div className="mr-8 transform hover:scale-105 transition-transform">
                    <a 
                        href="/" 
                        className="flex items-center space-x-2"
                        aria-label="A-News Homepage"
                    >
                        <span className="text-3xl font-bold text-red-600 font-[Oswald] tracking-tight">
                            A-NEWS
                            <span className="text-xs align-top bg-red-600 text-white px-1.5 py-0.5 rounded-md ml-1 animate-pulse">
                                PRO
                            </span>
                        </span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav 
                    className="hidden md:flex flex-1 items-center justify-between"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <div className="flex gap-6 px-6">
                        {Object.keys(navItems).map((category) => (
                            <div key={category} className="group relative">
                                <a 
                                    href={`#${category.toLowerCase()}`}
                                    className="group relative text-lg font-[Oswald] font-medium tracking-tight text-gray-600 transition-colors hover:text-red-600"
                                >
                                    <span>{category}</span>
                                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-600 transform scale-x-0 transition-transform group-hover:scale-x-100"/>
                                </a>
                                
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {navItems[category].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="/login"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="/signup"
                            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 active:scale-95"
                        >
                            Sign up
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="ml-auto flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-red-600 transition-colors md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? 
                        <X className="h-6 w-6 transition-transform duration-200 rotate-90" /> : 
                        <Menu className="h-6 w-6 transition-transform duration-200" />
                    }
                </button>

                {/* Mobile Menu */}
                <div 
                    className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transform transition-all duration-300 ${
                        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                    }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <nav className="container flex flex-col py-4">
                        {Object.entries(navItems).map(([category, items]) => (
                            <div key={category} className="border-b border-gray-100 last:border-0">
                                <a
                                    href={`#${category.toLowerCase()}`}
                                    className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-between"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {category}
                                    <ChevronDown className="h-4 w-4" />
                                </a>
                                <div className="pl-6 pb-2">
                                    {items.map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block px-4 py-2 text-sm text-gray-500 hover:text-red-600"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;