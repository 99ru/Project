import React, { useState, useEffect } from "react";
import { FavoritesProvider } from "./FavoritesContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutsPage from "./pages/WorkoutsPage";
import FavoritePage from "./pages/FavoritePage";
import CaloriesPage from "./pages/CaloriesPage";
import Planner from "./pages/PlannerPage";

import "./App.css";
import Header from "./components/header/Header";
import VideoLoop from "./components/video/VideoLoop";
import ModalData from "./components/modal/ModalData";
import Footer from "./components/footer/Footer";

const URL = "http://localhost:3030/exercises";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleFilterChange = (e) => setFilter(e.target.id);
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
      <FavoritesProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <VideoLoop />
                  <WorkoutsPage
                    handleFilterChange={handleFilterChange}
                    workouts={filteredWorkouts}
                    showWorkout={showWorkout}
                    filter={filter}
                  />
                </>
              }
            />
            <Route
              path="/favorite"
              element={<FavoritePage showWorkout={showWorkout} />}
            />
            <Route path="/calculator" element={<CaloriesPage />} />
            <Route
              path="/planner"
              element={
                <Planner workouts={workouts} showWorkout={showWorkout} />
              }
            />
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
