import InputColor from "./InputColor";
import AllColors from "./AllColors";
import Values from "values.js";
import { useState } from "react";
function App() {
  const [colors, setColors] = useState(new Values("#315c72").all(10));

  return (
    <main>
      <InputColor />
      <AllColors colors={colors} />
    </main>
  );
}

export default App;
