import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutMeDetails from './Components/AboutMeDetails/AboutMeDetails';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutmedetails" element={<AboutMeDetails />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
