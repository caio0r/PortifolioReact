import React from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import KingPDFPreview from '../assets/kingpdf-preview.png';
import KingPDF1 from '../assets/kingpdf-1.png';
import KingPDF2 from '../assets/kingpdf-2.png';
import KingPDF3 from '../assets/kingpdf-3.png';
import MarcenariaPreview from '../assets/marcenaria-preview.png';
import DormitorioPreview from '../assets/dormitorio-preview.png';
import Dormitorio1 from '../assets/dormitorio-1.png';
import Dormitorio2 from '../assets/dormitorio-2.png';
import Dormitorio3 from '../assets/dormitorio-3.png';

const Projects = ({ lang }) => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const openGallery = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject?.gallery) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject?.gallery) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
        }
    };
    const content = {
        en: {
            title: "Featured Projects",
            viewMore: "View Project"
        },
        pt: {
            title: "Projetos em Destaque",
            viewMore: "Ver Projeto"
        }
    };

    const text = content[lang];

    const projects = [
        {
            title: "KingPDF",
            description: {
                en: "A comprehensive tool to merge, split, and convert PDF files using Python and Node.js.",
                pt: "Uma ferramenta completa para juntar, dividir e converter arquivos PDF usando Python e Node.js."
            },
            tags: ["Python", "Node.js", "React"],
            image: KingPDFPreview,
            gallery: [KingPDFPreview, KingPDF1, KingPDF2, KingPDF3],
            github: "https://github.com/caio0r/KingPDF-NODE-React",
            demo: "https://github.com/caio0r/KingPDF-NODE-React",
            color: "#FF4D4D"
        },
        {
            title: "Marcenaria Shop",
            description: {
                en: "E-commerce platform for a carpentry shop built with React.",
                pt: "Plataforma de e-commerce para uma marcenaria construída com React."
            },
            tags: ["React", "Vercel", "CSS"],
            image: MarcenariaPreview, github: "https://github.com/caio0r/caio0r", // Adjust
            demo: "https://node-marcenaria.vercel.app/",
            color: "#4DFFDB"
        },
        {
            title: "Dormitory Control",
            description: {
                en: "System to manage dormitories and rest times for employees using Angular and Spring Boot.",
                pt: "Sistema para gerenciamento de dormitórios e controle de tempo de descanso de colaboradores."
            },
            tags: ["Angular", "Spring Boot", "MySQL"],
            image: DormitorioPreview,
            gallery: [DormitorioPreview, Dormitorio1, Dormitorio2, Dormitorio3],
            github: "https://github.com/caio0r/AngularDormitorio",
            demo: "https://github.com/caio0r/AngularDormitorio",
            color: "#3B82F6"
        }
    ];

    return (
        <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-secondary)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                {text.title}
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                        onClick={() => project.gallery ? openGallery(project) : null}
                    >
                        <div style={{
                            height: '200px',
                            backgroundColor: '#2a2a2a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            cursor: project.gallery ? 'pointer' : 'default'
                        }}>
                            {project.image ? (
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <span style={{ color: '#555' }}>Image Preview</span>
                            )}

                            {project.gallery && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    fontSize: '0.8rem',
                                    pointerEvents: 'none'
                                }}>
                                    +{project.gallery.length} photos
                                </div>
                            )}
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', hover: { color: '#fff' } }}>
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>
                                {project.description[lang]}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.8rem',
                                        borderRadius: '20px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        color: project.color || 'var(--accent)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeGallery}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{ position: 'relative', maxWidth: '1000px', width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <button onClick={closeGallery} style={{ position: 'absolute', top: '-40px', right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                                <X size={30} />
                            </button>

                            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button onClick={prevImage} style={{ position: 'absolute', left: '-50px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10 }}>
                                    <ChevronLeft size={40} />
                                </button>

                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    src={selectedProject.gallery[currentImageIndex]}
                                    alt={`Gallery ${currentImageIndex}`}
                                    style={{ maxHeight: '80vh', maxWidth: '100%', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}
                                />

                                <button onClick={nextImage} style={{ position: 'absolute', right: '-50px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10 }}>
                                    <ChevronRight size={40} />
                                </button>
                            </div>

                            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                {selectedProject.gallery.map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            backgroundColor: i === currentImageIndex ? 'var(--accent)' : '#555',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setCurrentImageIndex(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
