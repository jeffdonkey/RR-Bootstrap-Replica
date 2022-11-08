import './App.css';
import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import BrandImage from './components/BrandImage';
import Stores from "./components/Stores";


function App() {
  return (
    <div>
      <TopBar />
      <BrandImage />
    </div>
  );
}

export default App;
