import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
    const { skills } = portfolioData;

    const categories = [
        { key: 'frontend', title: 'Frontend Development', color: 'text-accent', border: 'border-accent' },
        { key: 'backend', title: 'Backend Development', color: 'text-primary-light', border: 'border-primary' },
        { key: 'tools', title: 'Tools & DevOps', color: 'text-emerald-500', border: 'border-emerald-500' },
        { key: 'platforms', title: 'Platforms', color: 'text-amber-500', border: 'border-amber-500' }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-24 bg-transparent relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className={`text-xl font-bold mb-6 pb-2 inline-block border-b-2 ${cat.color} ${cat.border}`}>
                                {cat.title}
                            </h3>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3"
                            >
                                {skills[cat.key].map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={item}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
