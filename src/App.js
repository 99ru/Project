import React, { useState, useEffect } from "react";
import { FavoritesProvider } from "./FavoritesContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage";
import FavoritePage from "./pages/FavoritePage";
import CaloriesPage from "./pages/CaloriesPage";
import Planner from "./pages/PlannerPage";

import "./App.css";
import Header from "./components/header/Header";
import VideoLoop from "./components/video/VideoLoop";
import ModalData from "./components/modal/ModalData";
import Pagination from "@mui/material/Pagination";
import Footer from "./components/footer/Footer";

const URL = "http://localhost:6969/exercises";
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
          <VideoLoop />
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
      <Footer />
    </div>
  );
}

export default App;
