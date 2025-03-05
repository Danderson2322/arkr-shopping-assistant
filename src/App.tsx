import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
import Home from './pages/Home'
import Saves from './pages/Saves'
// import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Navigation from 'components/Navigation';

const App: React.FC = () => {
  return (
  <Router basename="/arkr-shopping-assistant">
  {/* <Router> */}
      <div className="App">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = '/saved' element={<Saves />} />
          {/* Add more routes as needed */}
          {/* <Route path="/" element={<Navbar />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;