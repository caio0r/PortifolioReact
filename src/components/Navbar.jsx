import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import '../index.css';

const Navbar = ({ lang, setLang, theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const content = {
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        pt: {
            home: "Início",
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato"
        }
    };

    const text = content[lang];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                Caio<span style={{ color: 'var(--accent)' }}>.dev</span>
            </div>

            <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#home" className="nav-link">{text.home}</a>
                <a href="#about" className="nav-link">{text.about}</a>
                <a href="#projects" className="nav-link">{text.projects}</a>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                    <button
                        onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                        style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                        <Globe size={18} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{lang.toUpperCase()}</span>
                    </button>

                    {/* Theme Toggle - Placeholder functionality for now 
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          */}
                </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-toggle" style={{ display: 'none' }}>
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
