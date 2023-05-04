import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Cards from "./components/workouts/Cards";
import ModalData from "./components/modal/ModalData";
import Footer from "./components/footer/Footer";
import Pagination from "@mui/material/Pagination";

const URL = "https://run.mocky.io/v3/32b5991f-05ce-414d-90f7-3fe85416abf2";
const ITEMS_PER_PAGE = 12;

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("");
  const [genderToggle, setGenderToggle] = useState("mens");
  const [modal, setModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectFilter = (e) => setFilter(e.target.id);
  const selectGender = (e) => setGenderToggle(e.target.id);
  const toggleModal = () => setModal(!modal);
  const showWorkout = (id) => {
    setSelectedWorkout(id);
    setModal(true);
  };

  const filteredWorkouts = workouts.filter((workout) => {
    return workout.bodyParts.includes(filter);
  }); /* console.log(filteredWorkouts); */

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
      <Header />
      {/* <VideoLoop /> */}
      <Nav
        genderToggle={genderToggle}
        selectGender={selectGender}
        selectFilter={selectFilter}
      />
      <div className="main-content">
        <Cards
          workouts={currentWorkouts}
          showWorkout={showWorkout}
          genderToggle={genderToggle}
        />
      </div>
      <Pagination
        count={Math.ceil(filteredWorkouts.length / ITEMS_PER_PAGE)}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        className="pagination"
      />
      <ModalData
        workouts={workouts}
        modal={modal}
        toggleModal={toggleModal}
        genderToggle={genderToggle}
        selectedWorkout={selectedWorkout}
      />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
