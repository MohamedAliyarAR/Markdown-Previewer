import { useContext } from "react";
import EditorContext from "../EditorContext";

const previewer = () => {
  const { setMarked } = useContext(EditorContext);

  const handleChange = (e) => {
    setMarked(e.target.value);
  };

  return (
    <>
      <div className="editor-box">
        <div className="Title">
          <h2>Tools</h2>
        </div>
        <textarea
          autoFocus
          defaultValue="# Hello"
          className="input"
          id="editor"
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};

export default previewer;
