import workoutVideo from "../../assets/legacy.mp4";
import './VideoLoop.css';

const VideoLoop = () => {
  
  const scrollToSection = () => {
    const section = document.getElementById('started');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="video-wrapper">
      <video autoPlay loop muted className="hero-video">
        <source src={workoutVideo} type="video/mp4" />
      </video>

      <section>
        <h1>START YOUR GYM JOUNREY</h1>
        <h3>browse through 1300 workouts</h3>
        <button className="get-started-button" id="started" onClick={scrollToSection}>GET STARTED</button>
      </section>
    </div>
  );
};

export default VideoLoop;
