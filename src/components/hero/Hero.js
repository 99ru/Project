import FilteredWorkout from "../filtered/FilteredWorkout";
import "./hero.css";

const Hero = ({ selectFilter }) => {
  return (
    <div className="nav-container">
      <div className="nav-categories">
        <div className="categories">
          <FilteredWorkout selectFilter={selectFilter} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
