// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
