import Calories from "../components/calculator/Calories"
import Bmi from "../components/calculator/Bmi"

const CaloriesPage = () => {

  return (
    <div className="calculator-container">
      <Bmi />
      <Calories />
    </div>
     
   
  )
}

export default CaloriesPage