import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const About = () => {
    const { profile } = portfolioData;


    const stats = [
        { label: "Years Experience", value: "1+" },
        { label: "Projects Completed", value: "5+" },
        { label: "CGPA", value: "8.67" },
    ];

    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-gradient inline-block"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
                    >
                        I am a dedicated <span className="text-white font-semibold">Software Developer</span> based in Coimbatore, India.
                        My passion lies in engineering robust backend systems with <span className="text-accent">Node.js & PHP</span> and crafting intuitive frontends using <span className="text-primary-light">React</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto"
                    >
                        {profile.about}
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#experience" className="px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/50 transition-all text-white font-medium">
                            View Experience
                        </a>
                    </motion.div>
                </div>
            </div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
};

export default About;
