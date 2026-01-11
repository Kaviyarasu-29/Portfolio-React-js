import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-md border-b border-white/5' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    className="text-2xl font-bold font-sans cursor-pointer text-gradient"
                    onClick={() => scrollToSection('hero')}
                >
                    {portfolioData.profile.name.split(' ')[0]}
                </div>


                <button
                    className="md:hidden text-2xl text-gray-200"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>


                <ul className="hidden md:flex gap-8">
                    {navLinks.map((item, i) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <button
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-400 hover:text-accent font-medium transition-colors"
                            >
                                {item}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>


            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-secondary border-b border-white/5 overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {navLinks.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="text-gray-300 hover:text-accent text-lg font-medium w-full text-left"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
