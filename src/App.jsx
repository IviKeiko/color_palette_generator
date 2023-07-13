import InputColor from "./InputColor";
import AllColors from "./AllColors";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [colors, setColors] = useState(new Values("#315c72").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <InputColor addColor={addColor} />
      <AllColors colors={colors} />
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
}

export default App;
