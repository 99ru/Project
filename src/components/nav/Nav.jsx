/* import Toggle from "../buttons/Toggle"; */
import FilteredWorkout from "../buttons/FilteredWorkout";
import Toggle from "../buttons/Toggle";
import "./Nav.css";

const Nav = ({ selectGender, genderToggle, selectFilter }) => {
  return (
    <div className="nav-container">
     
      <div className="nav-categories">
        <div className="categories">
          
          <FilteredWorkout selectFilter={selectFilter} />
          <Toggle selectGender={selectGender} genderToggle={genderToggle} />
        </div>
      </div>
    
    </div>
  );
};

export default Nav;
