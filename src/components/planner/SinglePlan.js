import React, { useState } from "react";
import "./planner.css";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";

const SinglePlan = ({
  plan,
  workouts,
  addWorkoutToPlan,
  deletePlan,
  deleteWorkout,
  showWorkout,
  updateWorkoutReps,
  updateWorkoutSets,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [editing, setEditing] = useState(false);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setShowSearch(false);
  };

  const handleAdd = () => {
    setShowSearch(!showSearch);
  };

  const handleEdit = () => {
    setEditing(!editing);
    setShowOptions(false);
  };

  const handleSave = () => {
    setEditing(!editing);
  };

  return (
    <div className="workout-plan">
      <h2 className="workout-plan-title">{plan.name}</h2>
      <div className="icon-buttons">
        <button onClick={handleAdd} className="add-workout">
          <SearchIcon />
        </button>
        {!editing ? (
          <button onClick={toggleOptions} className="edit-button">
            <EditNoteRoundedIcon />
          </button>
        ) : (
          <button onClick={handleSave} className="save-changes">
            <DownloadDoneRoundedIcon />
          </button>
        )}
      </div>
      {showOptions && (
        <div className="dropdown-menu">
          <button onClick={handleEdit} className="dropdown-item">
            Edit Plan
          </button>
          <button onClick={() => deletePlan(plan.id)} className="dropdown-item">
            <p className="dropdown-delete-plan-btn">Delete Plan</p>
          </button>
        </div>
      )}
      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for workouts"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="workout-plan-input"
          />
          {searchTerm && (
            <div className="search-results">
              {filteredWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  onClick={() => {
                    addWorkoutToPlan(plan.id, workout);
                    setSearchTerm("");
                  }}
                  className="search-result-item"
                >
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="search-result-image"
                  />
                  <span className="search-result-name">{workout.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

{plan.workouts.map((workout) => (
  <div key={workout.id} className="workout-item">
    <img
      src={workout.image}
      className="workout-item-image"
      onClick={() => showWorkout(workout.id)}
    />
    <div className="workout-item-content">
      <p className="workout-item-name">{workout.name}</p>
      <div className="workout-item-sets-reps">
        {editing ? (
          <>
            <label>Sets</label>
            <input
              type="number"
              value={workout.sets}
              onChange={(e) =>
                updateWorkoutSets(plan.id, workout.id, Number(e.target.value))
              }
            />
            <label>Reps</label>
            <input
              type="number"
              value={workout.reps}
              onChange={(e) =>
                updateWorkoutReps(plan.id, workout.id, Number(e.target.value))
              }
            />
          </>
        ) : (
          `${workout.sets}x${workout.reps}`
        )}
      </div>
      {editing && (
        <button
          onClick={() => deleteWorkout(plan.id, workout.id)}
          className="delete-button"
        >
          <ClearRoundedIcon />
        </button>
      )}
    </div>
  </div>
))}
    </div>
  );
};

export default SinglePlan;
