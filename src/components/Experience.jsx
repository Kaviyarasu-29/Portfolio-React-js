import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Experience = () => {
    const { experience, education } = portfolioData;

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="experience" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient heading-font"
                >
                    Experience & Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                            <span className="text-primary">💼</span> Work History
                        </h3>
                        <div className="border-l-2 border-white/10 pl-8 space-y-12">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="relative group"
                                >
                                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-bg-secondary border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

                                    <div className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/10">
                                        <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                                        <p className="text-accent font-medium mb-1">{exp.company}</p>
                                        <p className="text-sm text-gray-500">{exp.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                            <span className="text-accent">🎓</span> Education
                        </h3>
                        <div className="border-l-2 border-white/10 pl-8 space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.2 }}
                                    className="relative group"
                                >
                                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-bg-secondary border-2 border-accent group-hover:bg-accent transition-colors duration-300" />

                                    <div className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-accent/10">
                                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                        <p className="text-accent font-medium mb-1">{edu.institution}</p>
                                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                                            <span>{edu.year}</span>
                                            <span className="font-semibold text-gray-400">{edu.score}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
