import React, { useState } from 'react';
import './planner.css'

const WorkoutPlan = ({ plan, workouts, addWorkoutToPlan }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkouts = workouts.filter(workout =>
    workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='workout-plan'>
  <h2 className="workout-plan-title">{plan.name}</h2> 
  <input
    type="text"
    placeholder="Search for workouts"
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="workout-plan-input" 
  />
  {searchTerm && (
    <div className="search-results">
      {filteredWorkouts.map(workout => (
        <div
          key={workout.id}
          onClick={() => {
            addWorkoutToPlan(plan.id, workout);
            setSearchTerm('');
          }}
          className="search-result-item" 
        >
          <img src={workout.image} alt={workout.name} className="search-result-image" /> 
          <span className="search-result-name">{workout.name}</span> 
        </div>
      ))}
    </div>
  )}
  {plan.workouts.map(workout => (
  <div key={workout.id} className="workout-item">
    <img src={workout.image} alt={workout.name} className="workout-item-image" />
    <p className="workout-item-name">{workout.name}</p>
  </div>
))}

</div>

  );
};

export default WorkoutPlan;