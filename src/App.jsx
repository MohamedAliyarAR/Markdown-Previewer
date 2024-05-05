import EditorContext from "./EditorContext.jsx";
import Output from "./component/Output.jsx";
import Previewer from "./component/Previewer.jsx";
import { createContext, useState } from "react";
// import runTest from "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

function App() {
  const [marked, setMarked] = useState("# Hello");

  const markedText = {
    marked,
    setMarked,
  };

  return (
    <>
      {/* <runTest /> */}
      <h1 className="Header">MarKdown Previwer</h1>
      <EditorContext.Provider value={markedText}>
        <div className="page">
          <div className="f-editor">
            <Previewer />
            <Output />
          </div>
        </div>
      </EditorContext.Provider>
    </>
  );
}

export default App;
