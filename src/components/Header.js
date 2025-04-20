import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-header">
        <h1>Sarath Saji</h1>
        <img 
          src="/images/Sarath.png" 
          alt="Your Name - Web Developer"
          className="profile-img"
        />
        <h2>Web Developer</h2>
        <p>
              I'm a passionate developer with expertise in modern web technologies. 
              With 2+ years of experience, I specialize in building responsive, 
              user-friendly applications using React, Node.js, and MongoDB.
              <br /><br />
              My core skills include:
              <span className="skills">
                JavaScript · React · Node.js · Express · MongoDB · REST APIs · Git
              </span>
            </p>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;