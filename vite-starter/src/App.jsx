import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");
  const handleColor = (e) => {
    setColor("blue");
  };
  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button className={color} onClick={handleColor}>
        click
      </button>
      <label htmlFor="check1">hello</label>
      <input type="checkbox" className="check1" id="check1" />
      <input type="checkbox" className="check2" />
    </div>
  );
}

export default App;
