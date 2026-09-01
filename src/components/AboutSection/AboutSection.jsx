import './AboutSection.css';
import profileImg from './profile.jpeg'; // Add this import statement

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper'>
        <div className='about-image'>
          {/* Change src to use the imported image variable */}
          <img src={profileImg} alt='Surabhi V' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Surabhi V, a Computer Science Engineering student constantly learning and building fast...</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;