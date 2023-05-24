import React, { useState, useEffect } from "react";
import SinglePlan from "./SinglePlan";
import "./planner.css";
import AddIcon from '@mui/icons-material/Add';

const Planner = ({ workouts, showWorkout }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [newPlanName, setNewPlanName] = useState("");
  const [addingPlan, setAddingPlan] = useState(false);

  const addPlan = (event) => {
     event.preventDefault();
    if (newPlanName.length < 3) {
      setErrorMessage("Plan name must be at least 3 characters long.");
      return;
    }
    const newPlan = {
      id: Math.random().toString(),
      name: newPlanName,
      workouts: [],
    };
    const newPlans = [...workoutPlans, newPlan];
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
    setNewPlanName("");
    setErrorMessage("");
    setAddingPlan(false); // Hide the input field
    
  };

  const addWorkoutToPlan = (planId, workout) => {
    // Find the plan
    const plan = workoutPlans.find((plan) => plan.id === planId);

    // Check if the workout is already in the plan
    if (plan.workouts.some((w) => w.id === workout.id)) {
      alert("This workout is already in the plan");
      return; // End the function early, do not add the workout
    }

    // If the workout is not in the plan, then we can add it
    const workoutWithSetsAndReps = { ...workout, sets: 1, reps: 10 };
    const newPlans = workoutPlans.map((plan) =>
      plan.id === planId
        ? { ...plan, workouts: [...plan.workouts, workoutWithSetsAndReps] }
        : plan
    );
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
  };

  const deletePlan = (planId) => {
    const newPlans = workoutPlans.filter((plan) => plan.id !== planId);
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
  };

  const deleteWorkout = (planId, workoutId) => {
    const newPlans = workoutPlans.map((plan) =>
      plan.id === planId
        ? {
            ...plan,
            workouts: plan.workouts.filter(
              (workout) => workout.id !== workoutId
            ),
          }
        : plan
    );
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
  };

  const updateWorkoutSets = (planId, workoutId, newSets) => {
    const newPlans = workoutPlans.map((plan) =>
      plan.id === planId
        ? {
            ...plan,
            workouts: plan.workouts.map((workout) =>
              workout.id === workoutId ? { ...workout, sets: newSets } : workout
            ),
          }
        : plan
    );
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
  };

  const updateWorkoutReps = (planId, workoutId, newReps) => {
    const newPlans = workoutPlans.map((plan) =>
      plan.id === planId
        ? {
            ...plan,
            workouts: plan.workouts.map((workout) =>
              workout.id === workoutId ? { ...workout, reps: newReps } : workout
            ),
          }
        : plan
    );
    setWorkoutPlans(newPlans);
    localStorage.setItem("workoutPlans", JSON.stringify(newPlans));
  };

  useEffect(() => {
    const storedPlans = localStorage.getItem("workoutPlans");
    if (storedPlans) {
      setWorkoutPlans(JSON.parse(storedPlans));
    }
  }, []);

  /* Create planner */
  return (
  <div className="planner">
    <div className="add-new">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!addingPlan && (
        <div onClick={() => setAddingPlan(true)} style={{textAlign: "center"}}>
          <AddIcon style={{fontSize: "3rem"}} />
          <p>Add new</p>
        </div>
      )}
      {addingPlan && 
        <form onSubmit={addPlan}>
          <input
            type="text"
            placeholder="New plan name"
            value={newPlanName}
            onChange={(e) => setNewPlanName(e.target.value)}
            className="planner-input"
            
          />
        </form>
      }
    </div>
    <div className="workout-plans">
      {workoutPlans.map((plan) => (
        <SinglePlan
          key={plan.id}
          plan={plan}
          workouts={workouts}
          addWorkoutToPlan={addWorkoutToPlan}
          deletePlan={deletePlan}
          deleteWorkout={deleteWorkout}
          showWorkout={showWorkout}
          updateWorkoutSets={updateWorkoutSets}
          updateWorkoutReps={updateWorkoutReps}
        />
      ))}
    </div>
  </div>
);
};

export default Planner;
