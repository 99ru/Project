import FilteredWorkout from "../filtered/FilteredWorkout";
import "./category.css";

const Category = ({ handleFilterChange }) => {
  return (
    <div className="category-container">
      <section className="category-categories">
      
        <article className="categories">
        <p className="category-title">Filter your workouts</p>
          <FilteredWorkout handleFilterChange={handleFilterChange} />
        </article>
      </section>
    </div>
  );
};

export default Category;
