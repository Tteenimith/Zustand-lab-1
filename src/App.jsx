import { useState } from "react";

import "./App.css";
import Todolist from "./components/Todolist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Todolist />
    </>
  );
}

export default App;
