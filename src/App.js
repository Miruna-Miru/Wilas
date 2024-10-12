import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Screens/Home';
import CreateBlog from './Screens/CreateBlog'; 

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path="/CreateBlog" element={<CreateBlog />} /> 
        </Routes>
    </Router>
);
export default App;

