import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
const AllColors = ({ colors }) => {
  return (
    <section>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default AllColors;
