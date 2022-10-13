import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Search from "./components/Search";
import Exercises from "./components/Exercise"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Icons />
      <Search />
      <Exercises />
      
    </div>
  );
}

export default App;
