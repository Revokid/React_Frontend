import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProjects = async () => {
      try {
        console.log('Starting projects fetch...');
        const data = await getProjects();
        if (!signal.aborted) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err.message);
          console.error('Fetch error:', err);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      controller.abort(); // Cancel request if component unmounts
    };
  }, []);

  if (loading) return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading projects...</p>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <h3>Connection Error</h3>
      <p className="error-message">{error}</p>
      <div className="troubleshooting">
        <h4>Troubleshooting Steps:</h4>
        <ol>
          <li>Ensure backend server is running on port 9999</li>
          <li>Check terminal for backend server logs</li>
          <li>Try accessing <a href="http://localhost:9999/api/projects" target="_blank">API directly</a></li>
          <li>Disable any VPN or firewall temporarily</li>
        </ol>
      </div>
      <button 
        className="retry-button" 
        onClick={() => window.location.reload()}
      >
        Retry Connection
      </button>
    </div>
  );

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;