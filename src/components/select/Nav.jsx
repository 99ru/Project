import FilteredWorkout from "../filtered/FilteredWorkout";
import "./Nav.css";

const Nav = ({ selectFilter }) => {
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

export default Nav;
