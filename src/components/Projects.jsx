import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/50 transition-colors duration-300"
                        >

                            <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center group">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="text-4xl font-black text-white/5 transform -rotate-6 scale-150 select-none">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                {project.client && <div className="text-primary-light text-sm mb-4 font-medium">Client: {project.client}</div>}
                                <div className="text-xs text-gray-500 mb-4 uppercase tracking-wider">{project.duration}</div>

                                <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                                {project.keyContributions && (
                                    <div className="border-t border-white/10 pt-4 mt-auto">
                                        <p className="text-sm font-semibold text-gray-300 mb-2">Key Contributions:</p>
                                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                                            {project.keyContributions.map((contrib, i) => (
                                                <li key={i} className="">{contrib}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
