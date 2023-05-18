import React, { useState, useEffect} from 'react';
import WorkoutPlan from './WorkoutPlan';
import './profile.css';

const Profile = ({ workouts }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [newPlanName, setNewPlanName] = useState('');
  
  const addPlan = () => {
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
    localStorage.setItem('workoutPlans', JSON.stringify(newPlans));
    setNewPlanName('');
    setErrorMessage(''); 
  };

  const addWorkoutToPlan = (planId, workout) => {
    const newPlans = workoutPlans.map(plan =>
      plan.id === planId
        ? { ...plan, workouts: [...plan.workouts, workout] }
        : plan
    );
    setWorkoutPlans(newPlans);
    localStorage.setItem('workoutPlans', JSON.stringify(newPlans));
  };

  useEffect(() => {
    const storedPlans = localStorage.getItem('workoutPlans');
    if (storedPlans) {
      setWorkoutPlans(JSON.parse(storedPlans));
    }
  }, []);
  
  

  return (

  
    <div className="wrapper">
    <div className="profile">
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <input
      type="text"
      placeholder="New plan name"
      value={newPlanName}
      onChange={e => setNewPlanName(e.target.value)}
      className="profile-input" 
    />
    <button onClick={addPlan} className="profile-button">Create Plan</button> 

    <div className="workout-plans">
    {workoutPlans.map(plan => (
      <WorkoutPlan
        key={plan.id}
        plan={plan}
        workouts={workouts}
        addWorkoutToPlan={addWorkoutToPlan}
      />
    ))}
    
    </div>
  </div>
  </div>
  ); 
};

export default Profile;
