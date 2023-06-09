import React, { useState, useEffect } from "react";
import Category from "../components/category/Category";
import Cards from "../components/workouts/Cards";
import Pagination from "@mui/material/Pagination";

const ITEMS_PER_PAGE = 12;

const WorkoutsPage = ({ handleFilterChange, workouts, showWorkout, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentWorkouts = workouts.slice(indexOfFirstItem, indexOfLastItem);

 /*  useEffect(() => {
    setCurrentPage(1); 
  }, [handleFilterChange]); */

    useEffect(() => {
    setCurrentPage(1); // Reset page when filter changes
  }, [filter]); // filter is the state variable changed by handleFilterChange


  return (
    <div>
      <Category handleFilterChange={handleFilterChange} />
      <div className="main-content" id="started">
        <Cards workouts={currentWorkouts} showWorkout={showWorkout} />
      </div>
      <div className="pagination-wrapper">
        <Pagination
          count={Math.ceil(workouts.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default WorkoutsPage;
