import React from 'react';
import './Projects.css'; // Caso queira adicionar estilos personalizados

const projectsList = [
    {
        name: 'Snake Game',
        link: 'https://snake-game-fawn-three.vercel.app/',
        animatedImage: '/snake.mp4' // URL da imagem animada
    },
    {
        name: 'Zap-Zap',
        link: 'https://chat-devmnl.vercel.app/',
        animatedImage: '/chat.mp4' // URL da imagem animada
    },
    {
        name: 'Users',
        link: 'https://devclub-cadastro-usuarios.vercel.app/',
        animatedImage: '/users.mp4' // URL da imagem animada
    },
    {
        name: 'Pro-Ranker',
        link: 'https://pro-ranker.vercel.app/index.html',
        animatedImage: '/trofeu.mp4' // URL da imagem animada
    },
    // Adicione mais projetos conforme necessário
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-list">
                {projectsList.map((project, index) => (
                    <div key={index} className="project-item">
                        <video
                            src={project.animatedImage}
                            className="project-video"
                            loop
                            autoPlay
                            muted
                            width="150"
                            height="150"
                        >
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;