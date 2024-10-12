import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Home from './Screens/Home';
import CreateBlog from './Screens/CreateBlog'; // Import CreateBlog component

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} /> {/* Home route */}
            <Route path="/CreateBlog" element={<CreateBlog />} /> {/* CreateBlog route */}
        </Routes>
    </Router>
);
export default App;

