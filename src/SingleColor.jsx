import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy");
      }
    } else {
      toast.warning("Clipboard access not available");
    }
  };
  return (
    <article style={{ background: `#${hex}` }} onClick={saveToClipboard}>
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};

export default SingleColor;
