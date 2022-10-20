import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Search from "./components/Search";
import Exercises from "./components/Exercise"

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/exercises" element={<Exercises />}/>
   </Routes>
  );
}

export default App;
