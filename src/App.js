
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import PublishedBlogs from './components/PublishedBlogs';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Header from './components/Header'; 
import About from './Screens/About';
import Profile from './components/Profile';
import CreateBlog from './components/CreateBlog';

const App = () => (
    <div>
       <Header /> {/* evelyn */}
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/CreateBlog' element={<CreateBlog/>}/> 
          <Route path="/published-blogs" element={<PublishedBlogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
       </Routes>
    </div>
);

export default App;



