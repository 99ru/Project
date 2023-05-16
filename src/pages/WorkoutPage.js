import React from 'react'
import Nav from '../components/select/Nav'
import Cards from '../components/workouts/Cards'

const WorkoutsPage = ({ selectFilter, currentWorkouts, showWorkout }) => {

  return (
    <div>
   <Nav selectFilter={selectFilter} />
   <Cards workouts={currentWorkouts} showWorkout={showWorkout} />
    </div>
  )
}

export default WorkoutsPage