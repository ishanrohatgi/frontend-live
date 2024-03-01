import Header from "./components/Header";
import Editor from "./components/Editor";
import Output from "./components/Output";
import { useContext } from "react";
import "codemirror/lib/codemirror.css";
import { DataContexts } from "./contexts/DataContext";

import "codemirror/theme/material.css";
import "./App.css";

function App() {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContexts);
  return (
    <div className="App">
      <Header></Header>
      <div className="editor-container">
        <Editor
          lang={"HTML"}
          value={html}
          mode="xml"
          onChange={setHtml}
        ></Editor>
        <Editor lang="CSS" value={css} mode="css" onChange={setCss}></Editor>
        <Editor
          lang={"JS"}
          value={js}
          mode="javascript"
          onChange={setJs}
        ></Editor>
      </div>

      <Output html={html} css={css} javascript={js}></Output>
    </div>
  );
}

export default App;
