import FilteredWorkout from "../buttons/FilteredWorkout";
import "./Nav.css";

const Nav = ({ selectGender, genderToggle, selectFilter }) => {
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
