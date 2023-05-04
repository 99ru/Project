import "./modal.css";

const CardModal = ({ modal, toggleModal, workout, genderToggle }) => {

  return (
    <>
      {modal ? (
        <main className="modal-container">
        <div className="modal-content">
          
          <button type="button" onClick={toggleModal}>Close</button>
          <img src={workout.gif} alt={workout.name} />
          <div className="info-box">
          <h1>{workout.name}</h1>
            <p><strong>Primary muscle:</strong> {workout.primaryMuscle}</p>
            <p><strong>Equipment used:</strong> <span>{workout.equipment}</span></p>
          </div>
        </div>
      </main>
      
      ) : null}
    </>
  );

};

export default CardModal;
