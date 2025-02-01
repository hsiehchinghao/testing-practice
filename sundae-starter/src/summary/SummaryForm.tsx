import React, { useState, useEffect } from "react";
import "./SummaryForm.scss";

export default function SummaryForm() {
  const [isSelected, setIsSelected] = useState(false);
  const [checkChocolate, setCheckChocolate] = useState(false);
  const [checkStraw, setCheckStraw] = useState(false);
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "chocolate") {
      setCheckChocolate((prev) => !prev);
    }
    if (e.target.id === "strawberry") {
      setCheckStraw((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!checkChocolate && !checkStraw) {
      setIsSelected(false);
    }
    if (checkChocolate || checkStraw) {
      setIsSelected(true);
    }
  }, [checkChocolate, checkStraw]);
  return (
    <>
      <div className="form">
        <div className="form_item">
          <input
            className="me-3"
            type="checkbox"
            id="chocolate"
            checked={checkChocolate}
            onChange={handleSelect}
          />
          <label htmlFor="chocolate">Chocolate</label>
        </div>
        <div className="form_item">
          <input
            className="me-3"
            type="checkbox"
            id="strawberry"
            checked={checkStraw}
            onChange={handleSelect}
          />
          <label htmlFor="strawberry">Strawberry</label>
        </div>
        <button className="submit-btn" disabled={!isSelected}>
          Submit!
        </button>
      </div>
    </>
  );
}
