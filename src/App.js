import React, { useState, useEffect } from "react";
import { FavoritesProvider } from "./FavoritesContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage";
import FavoritePage from "./pages/FavoritePage";
import CaloriesPage from "./pages/CaloriesPage";
import Planner from "./pages/PlannerPage";

import "./App.css";
import Header from "./components/header/Header";
import ModalData from "./components/modal/ModalData";
import Pagination from "@mui/material/Pagination";

const URL = "http://localhost:6969/exercises";
const ITEMS_PER_PAGE = 18;

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
  /* console.log(filteredWorkouts); */

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
    <div className="body">
      <FavoritesProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WorkoutPage
                    selectFilter={selectFilter}
                    currentWorkouts={currentWorkouts}
                    showWorkout={showWorkout}
                  />
                  <Pagination
                    count={Math.ceil(filteredWorkouts.length / ITEMS_PER_PAGE)}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                    className="pagination"
                  />
                </>
              }
            />

            <Route path="/favorite" element={<FavoritePage
              showWorkout={showWorkout} />}  />
            <Route path="/calculator" element={<CaloriesPage />} />
            <Route path="/planner" element={<Planner workouts={workouts} showWorkout={showWorkout} />} />


          </Routes>
          <ModalData
            workouts={workouts}
            modal={modal}
            toggleModal={toggleModal}
            selectedWorkout={selectedWorkout}
          />
        </Router>
      </FavoritesProvider>
      <footer>
        <p>&copy; 2023 | GYM APP | All Rights Reserved | BÄFTA</p>
      </footer>
    </div>
  );
}

export default App;
