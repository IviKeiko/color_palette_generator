const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  return (
    <article style={{ background: `#${hex}` }}>
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};

export default SingleColor;
