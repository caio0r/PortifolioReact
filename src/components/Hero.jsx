import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/profile.png';

const Hero = ({ lang }) => {
    const content = {
        en: {
            greeting: "Hello, I'm",
            title: "Full Stack Developer",
            description: "Combining technology, accessibility, and strategy to build solutions that deliver value to your business.",
            contact: "Get in Touch"
        },
        pt: {
            greeting: "Olá, eu sou",
            title: "Desenvolvedor Full Stack",
            description: "Uno tecnologia, acessibilidade e estratégia para construir soluções que entregam valor ao seu negócio.",
            contact: "Entre em Contato"
        }
    };

    const text = content[lang];

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '8rem 2rem 4rem',
            background: 'radial-gradient(circle at 50% 50%, rgba(26, 26, 26, 1) 0%, rgba(10, 10, 10, 1) 100%)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ marginBottom: '1.5rem' }}>
                    <img
                        src={ProfilePhoto}
                        alt="Profile"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3px solid var(--accent)',
                            boxShadow: '0 0 20px rgba(255, 77, 77, 0.3)'
                        }}
                    />
                </div>
                <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{text.greeting} Caio</h3>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: '1.1'
                }}>
                    {text.title}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    {text.description}
                </p>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
                    <a href="https://github.com/caio0r" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                        <Github size={30} />
                    </a>
                    {/* Add Linkedin if available, waiting for user input or just placeholder */}
                    <a href="https://www.linkedin.com/in/caio-mota-68a599214/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}>
                        <Linkedin size={30} />
                    </a>
                    <a href="mailto:caiocesarnascimentomota@gmail.com" className="social-icon" style={{ color: 'var(--text-secondary)' }}>
                        <Mail size={30} />
                    </a>
                </div>

                <a href="mailto:caiocesarnascimentomota@gmail.com" style={{
                    padding: '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: 'var(--accent)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px var(--accent-glow)',
                    textDecoration: 'none',
                    display: 'inline-block'
                }}>
                    {text.contact}
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
