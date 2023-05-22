import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Cards from "../components/workouts/Cards";
import Pagination from "@mui/material/Pagination";

const ITEMS_PER_PAGE = 12;

const WorkoutsPage = ({ selectFilter, workouts, showWorkout }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentWorkouts = workouts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Hero selectFilter={selectFilter} />
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