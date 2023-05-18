import WorkoutPlanner from '../components/planner/WorkoutPlanner'

const ProfilePage = ({ workouts }) => {
  return (
    <>
    <WorkoutPlanner workouts={workouts} />
    </>
  )
}

export default ProfilePage
