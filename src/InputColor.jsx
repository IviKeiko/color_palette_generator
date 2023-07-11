import { useState } from "react";

const InputColor = () => {
  const [color, setColor] = useState("#08B2E3");
  const handleSubmit = (e) => {};
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
          placeholder="#08B2E3"
        />
        <button type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default InputColor;
