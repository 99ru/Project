import Planner from '../components/planner/Planner'

const PlannerPage = ({ workouts, showWorkout}) => {
  return (
    <div className='planner-container'>
    <Planner workouts={workouts} showWorkout={showWorkout} />
    </div>
  )
}

export default PlannerPage
