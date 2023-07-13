import { useState } from "react";

const InputColor = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section>
      <h3>Color Palette Generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#315c72"
        />
        <button type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default InputColor;
