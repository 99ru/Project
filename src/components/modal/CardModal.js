import "./modal.css";

const CardModal = ({ modal, toggleModal, workout}) => {

  return (
    <>
      {modal ? (
        <main className="modal-container">
        <div className="modal-content">
          <button type="button" onClick={toggleModal}>Close</button>
          <img src={workout.gif} alt={workout.name} />

         {/* <video autoPlay loop muted className="modal-workout-video">
              <source src={workout.video} type="video/mp4" />
            </video> */}
          <div className="info-box">
          <h1>{workout.name}</h1>
          <p><strong>Area:</strong> {workout.bodyParts}</p>
            <p><strong>Primary muscle:</strong> {workout.primaryMuscle}</p>
            <p><strong>Equipment used:</strong> <span>{workout.equipment}</span></p>
            <p><strong>How to Perform</strong></p>
            <p>Donec fermentum augue quam, in euismod massa ultricies in. Vestibulum lacinia erat ligula, at bibendum leo finibus ultrices. Nullam etlacus</p>
          </div>
        </div>
      </main>
      
      ) : null}
    </>
  );

};

export default CardModal;


