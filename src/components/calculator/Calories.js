import React, { useState } from "react";
import "./calculator.css";

const Calories = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(80);
  const [walking, setWalking] = useState(2);
  const [cardio, setCardio] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "gender":
        setGender(value);
        break;
      case "age":
        setAge(parseInt(value));
        break;
      case "height":
        setHeight(parseInt(value));
        break;
      case "weight":
        setWeight(parseInt(value));
        break;
      case "walking":
        setWalking(parseInt(value));
        break;
      case "cardio":
        setCardio(parseInt(value));
        break;
      default:
        break;
    }
  };

  const calculateBMR = () => {
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === "male" ? 5 : -161;
    bmr = bmr * 1.2;
    bmr += (walking * 60 * (0.03 * weight)) / 7;
    bmr += (cardio * 60 * (0.07 * weight)) / 7;
    return Math.floor(bmr);
  };

  const targetGainWeight = Math.round((calculateBMR() + 300) / 100) * 100;
  const targetMaintain = Math.round(calculateBMR() / 100) * 100;
  const targetLoseWeight = Math.round((calculateBMR() - 500) / 100) * 100;

  return (
    <div className="bmr-container">
      <div className="bmr-content">
        <div className="choose-gender">
          <div className="segmented-control">
            <input
              id="calc-gender-male"
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleInputChange}
            />
            <label htmlFor="calc-gender-male">Male</label>
          </div>
          <div className="segmented-control">
            <input
              id="calc-gender-female"
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleInputChange}
            />
            <label htmlFor="calc-gender-female">Female</label>
          </div>
        </div>
        <label htmlFor="calc-age" id="calc-age_value">
          Age: {age}
        </label>
        <input
          id="calc-age"
          type="range"
          name="age"
          value={age}
          min="13"
          max="100"
          onChange={handleInputChange}
        />
        <label htmlFor="calc-height" id="calc-height_value">
          Height: {height} cm
        </label>
        <input
          id="calc-height"
          type="range"
          name="height"
          value={height}
          min="80"
          max="250"
          onChange={handleInputChange}
        />
        <label htmlFor="calc-weight" id="calc-weight_value">
          Weight: {weight} kg
        </label>
        <input
          id="calc-weight"
          type="range"
          name="weight"
          value={weight}
          min="40"
          max="200"
          onChange={handleInputChange}
        />
        <label htmlFor="calc-walking" id="calc-walking_value">
          Walking: {walking} hours per week
        </label>
        <input
          id="calc-walking"
          type="range"
          name="walking"
          value={walking}
          min="0"
          max="50"
          onChange={handleInputChange}
        />
        <label htmlFor="calc-cardio" id="calc-cardio_value">
          Cardio: {cardio} hours per week
        </label>
        <input
          id="calc-cardio"
          type="range"
          name="cardio"
          value={cardio}
          min="0"
          max="50"
          onChange={handleInputChange}
        />
      </div>
      <div className="bmr-results">
        <div id="calc-target-gain">
          To Gain Weight:
          <br />
          <span>{targetGainWeight} calories</span>
        </div>
        <div id="calc-target-maintain">
          To Maintain:
          <br />
          <span>{targetMaintain} calories</span>
        </div>
        <div id="calc-target-lose">
          To Lose Weight:
          <br />
          <span>{targetLoseWeight} calories</span>
        </div>
      </div>
    </div>
  );
};

export default Calories;
