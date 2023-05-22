import FilteredWorkout from "../filtered/FilteredWorkout";
import "./hero.css";

const Hero = ({ selectFilter }) => {
  return (
    <div className="nav-container">
      <section className="nav-categories">
      
        <article className="categories">
        <p className="nav-title">Filter your workouts</p>
          <FilteredWorkout selectFilter={selectFilter} />
        </article>
      </section>
    </div>
  );
};

export default Hero;
