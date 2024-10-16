// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Screens/Home';


// const App = () => (
//     <div>
//        <Home/>
//     </div>
// );
// export default App




import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Header from './components/Header';  
import CreateBlog from './Screens/CreateBlog';

const App = () => (
    <div>
       <Header /> {/* Optional, but you can include a header for navigation */}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/CreateBlog' element={<CreateBlog/>}/> 
       </Routes>
    </div>
);

export default App;

