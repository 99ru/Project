import React, { useState } from "react";
import "./calculator.css";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "weight":
        setWeight(value);
        break;
      case "height":
        setHeight(value);
        break;
      default:
        break;
    }
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);
    setBmiResult(roundedBMI);

    if (bmi < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory("Normal Weight");
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obese");
    }
  };

  return (
    <div className="calculator bmi-calculator">
      <div className="calculator-content">
        <label htmlFor="calc-weight">Weight (kg)</label>
        <input
          type="number"
          name="weight"
          id="calc-weight"
          value={weight}
          placeholder="Enter your weight"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="calc-height">Height (cm)</label>
        <input
          type="number"
          name="height"
          id="calc-height"
          value={height}
          placeholder="Enter your height"
          onChange={handleInputChange}
          required
        />
        <button onClick={calculateBMI}>Calculate</button>
      </div>
      <div className="results">
        {bmiResult && (
          <>
            <div id="calc-bmi-result">
              BMI: <span>{bmiResult}</span>
            </div>
            <div id="calc-bmi-category">
              Category: <span>{bmiCategory}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bmi;