import CardModal from "./CardModal";

const ModalData = ({
  workouts,
  selectedWorkout,
  modal,
  toggleModal,
}) => {
return (
  <>
    {workouts
        .filter((workout) => workout.id === selectedWorkout)
        .map((filteredWorkout) => (
          <CardModal
            key={filteredWorkout.id}
            workout={filteredWorkout}
            modal={modal}
            toggleModal={toggleModal}
            
          />
        ))}
  </>
)
};

export default ModalData