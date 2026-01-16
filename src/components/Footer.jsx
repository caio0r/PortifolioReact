import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ lang }) => {
    const content = {
        en: {
            rights: "All rights reserved."
        },
        pt: {
            rights: "Todos os direitos reservados."
        }
    };

    const text = content[lang];
    const year = new Date().getFullYear();

    return (
        <footer style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <a href="https://github.com/caio0r" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/caio-mota-68a599214/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <Linkedin size={20} />
                </a>
                <a href="mailto:caiocesarnascimentomota@gmail.com" style={{ color: 'inherit' }}>
                    <Mail size={20} />
                </a>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
                &copy; {year} Caio. {text.rights}
            </p>
        </footer>
    );
};

export default Footer;
