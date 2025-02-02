import React, { useState, useEffect } from "react";
import "./SummaryForm.scss";

export default function SummaryForm() {
  const [isSelected, setIsSelected] = useState(false);
  const [checkChocolate, setCheckChocolate] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "chocolate") {
      setCheckChocolate((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!checkChocolate) {
      setIsSelected(false);
    }
    if (checkChocolate) {
      setIsSelected(true);
    }
  }, [checkChocolate]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsHover(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsHover(false);
  };

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
          <label
            htmlFor="chocolate"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Chocolate
          </label>
          {isHover && (
            <div
              data-testid="tooltip"
              role="tooltip" // 加上角色 logRoles 才會顯示
              className="item-tooltip mx-3 item-tooltip_active"
            >
              巧克力
            </div>
          )}
        </div>
        <button className="submit-btn" disabled={!isSelected}>
          Submit!
        </button>
      </div>
    </>
  );
}
