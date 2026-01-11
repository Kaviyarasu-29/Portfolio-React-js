import React from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';

const Contact = () => {
    const { email, linkedin } = portfolioData.profile;

    return (
        <section id="contact" className="min-h-[80vh] flex items-center py-24 bg-transparent relative">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
                    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                        I'm currently available for full-time opportunities.
                        Let's build something amazing together.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.a
                            href={`mailto:${email}`}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/5 transition-colors"
                        >
                            <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                📧
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Email Me</div>
                                <div className="text-lg md:text-xl font-bold text-white group-hover:text-primary-light transition-colors">{email}</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-2xl flex items-center gap-6 group hover:bg-white/5 transition-colors"
                        >
                            <div className="h-14 w-14 bg-accent/20 rounded-full flex items-center justify-center text-3xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                💼
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">LinkedIn</div>
                                <div className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors">Let's Connect</div>
                            </div>
                        </motion.a>
                    </div>

                    <footer className="text-gray-600 border-t border-white/5 pt-12">
                        <p>© {new Date().getFullYear()} Kaviyarasu S. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
