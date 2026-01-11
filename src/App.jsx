import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="relative min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-white">

            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <img
                    src="/profile-2.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary/90" />
            </div>

            <Navbar />

            <main className="relative z-10 w-full">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
