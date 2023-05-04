import workoutVideo from "../../assets/legacy.mp4";
import './VideoLoop.css';

const VideoLoop = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay loop muted className="hero-video">
        <source src={workoutVideo} type="video/mp4" />
      </video>

      <section>
        <h1>We're all gonna make it brah</h1>
        <p> -Aziz Zyzz Shavershian </p>
      </section>
    </div>
  );
};

export default VideoLoop;
