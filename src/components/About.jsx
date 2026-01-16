import React from 'react';
import { Code, Database, Layout, Server, Settings, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ lang }) => {
    const content = {
        en: {
            title: "About Me",
            description: "I am a passionate software developer focused on building scalable web applications. I love solving complex problems and learning new technologies.",
            whatIDo: "What I Do",
            skills: [
                { name: "Frontend Development", icon: <Layout />, desc: "React, CSS, HTML" },
                { name: "Backend Development", icon: <Server />, desc: "Node.js, Python" },
                { name: "Database Design", icon: <Database />, desc: "SQL, NoSQL" },
                { name: "System Architecture", icon: <Settings />, desc: "Scalable solutions" }
            ]
        },
        pt: {
            title: "Sobre Mim",
            description: "Sou um desenvolvedor de software apaixonado por criar aplicações web escaláveis. Adoro resolver problemas complexos e aprender novas tecnologias.",
            whatIDo: "O que eu faço",
            skills: [
                { name: "Desenvolvimento Frontend", icon: <Layout />, desc: "React, CSS, HTML" },
                { name: "Desenvolvimento Backend", icon: <Server />, desc: "Node.js, Python" },
                { name: "Banco de Dados", icon: <Database />, desc: "SQL, NoSQL" },
                { name: "Arquitetura de Sistemas", icon: <Settings />, desc: "Soluções escaláveis" }
            ]
        }
    };

    const text = content[lang];

    return (
        <section id="about" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{text.title}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        {text.description}
                    </p>
                </motion.div>

                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{text.whatIDo}</h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {text.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '10px',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {React.cloneElement(skill.icon, { size: 40 })}
                            </div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{skill.name}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
