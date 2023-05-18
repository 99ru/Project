import Planner from '../components/planner/Planner'

const PlannerPage = ({ workouts, showWorkout}) => {
  return (
    <>
    <Planner workouts={workouts} showWorkout={showWorkout} />
    </>
  )
}

export default PlannerPage
