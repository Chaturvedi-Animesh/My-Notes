import "./App.css";
import Register from "./components/LoginSignup/Register";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NotesComponent from "./components/Notes/index";
import Login from "./components/LoginSignup/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<NotesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
