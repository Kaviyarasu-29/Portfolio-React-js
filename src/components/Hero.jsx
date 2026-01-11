import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Hero = () => {
    const { name, role, summary } = portfolioData.profile;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const textVariant = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                delay: 0.5,
                duration: 0.8
            }
        },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">



            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col"
                    >
                        <motion.span variants={textVariant} className="text-accent font-bold tracking-wider uppercase mb-3 text-base">
                            Hello, I'm
                        </motion.span>

                        <motion.h1 variants={textVariant} className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-xl">
                            {name}
                            <span className="block text-2xl md:text-4xl text-gray-300 mt-2 font-semibold">
                                {role}
                            </span>
                        </motion.h1>

                        <motion.p variants={textVariant} className="text-base md:text-xl text-gray-200 max-w-lg mb-8 leading-relaxed drop-shadow-md font-medium">
                            {summary}
                        </motion.p>

                        <motion.div variants={textVariant}>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-block px-10 py-4 bg-gradient-main rounded-full font-bold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        animate="show"
                        className="hidden md:flex justify-center md:justify-end"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-main rounded-full blur-[60px] opacity-40 animate-pulse" />

                            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl glass p-1">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img
                                        src="/profile-1.jpg"
                                        alt={name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>


                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border border-white/10 rounded-full border-dashed pointer-events-none"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
