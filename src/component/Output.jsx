import { useContext } from "react";
import Markdown from "react-markdown";
import EditorContext from "../EditorContext";

export default function Output() {
  const { marked } = useContext(EditorContext);
  return (
    <div className="editor-box">
      <div className="Title">
        <h2>Output</h2>
      </div>
      <div className="result" id="preview">
        <Markdown>{marked}</Markdown>
      </div>
    </div>
  );
}
