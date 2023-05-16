import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage";
import HomePage from "./pages/FavouritePage";

import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/select/Nav";
import Cards from "./components/workouts/Cards";
import ModalData from "./components/modal/ModalData";
import Footer from "./components/footer/Footer";
import Pagination from "@mui/material/Pagination";
import FavouritePage from "./pages/FavouritePage";

const URL = "http://localhost:3000/exercises";
const ITEMS_PER_PAGE = 12;

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectFilter = (e) => setFilter(e.target.id);
  const toggleModal = () => setModal(!modal);
  const showWorkout = (id) => {
    setSelectedWorkout(id);
    setModal(true);
  };

  const filteredWorkouts = workouts.filter((workout) => {
    return (
      workout.bodyParts.includes(filter) || workout.equipment.includes(filter)
    );
  });
  console.log(filteredWorkouts);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentWorkouts = filteredWorkouts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    const fetchURL = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setWorkouts(data.exercises || []);
    };
    fetchURL();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route
  path="/"
  element={<WorkoutPage selectFilter={selectFilter} currentWorkouts={currentWorkouts} showWorkout={showWorkout} />}
/>
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>



       {/*  <Nav selectFilter={selectFilter} />
        <Cards workouts={currentWorkouts} showWorkout={showWorkout} /> */}
        <ModalData
          workouts={workouts}
          modal={modal}
          toggleModal={toggleModal}
          selectedWorkout={selectedWorkout}
        />
        <Pagination
          count={Math.ceil(filteredWorkouts.length / ITEMS_PER_PAGE)}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          className="pagination"
        />
      </Router>
    </div>
  );
}

export default App;
