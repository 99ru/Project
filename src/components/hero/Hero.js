import FilteredWorkout from "../filtered/FilteredWorkout";
import "./hero.css";

const Hero = ({ handleFilterChange }) => {
  return (
    <div className="nav-container">
      <section className="nav-categories">
      
        <article className="categories">
        <p className="nav-title">Filter your workouts</p>
          <FilteredWorkout handleFilterChange={handleFilterChange} />
        </article>
      </section>
    </div>
  );
};

export default Hero;
