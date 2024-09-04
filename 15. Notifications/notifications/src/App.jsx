import { useState } from "react";
import Empty from "./components/Empty";
import Notif from "./components/Notif";
import "./App.css";

function App() {
  return (
    <div className="bg-purple-300 w-screen min-h-screen ">
      {/* <Empty /> */}
      <Notif />
    </div>
  );
}

export default App;
