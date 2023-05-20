import workoutVideo from "../../assets/legacy.mp4";
import './VideoLoop.css';

const VideoLoop = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay loop muted className="hero-video">
        <source src={workoutVideo} type="video/mp4" />
      </video>

      <section>
        <h1>START YOUR GYM JOUNREY</h1>
        <h3>browse through 1300 workouts</h3>
        <button>GET STARTED</button>
      </section>
    </div>
  );
};

export default VideoLoop;
