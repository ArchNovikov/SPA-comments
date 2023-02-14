import Comment from "./components/Comment";
import React from "react";
import CreateComment from "./components/CreateComment";

function App() {
    return (
        <div className="App">
            <Comment name="Arch" text="Hello everybody"/>
            <Comment name="raidcam" text="Hello Arch"/>
            <CreateComment/>
        </div>
    );
}

export default App;
