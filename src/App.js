import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Header from './components/Header';
import CreateBlog from './Screens/CreateBlog';
import About from './Screens/About';
import BlogList from './components/BlogList';
import ReadBlog from './Screens/ReadBlog';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => (
    <div>
       <Header /> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createBlog" element={<CreateBlog />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:category" element={<BlogList />} /> 
          <Route path="/blog/:id" element={<ReadBlog />} /> 
       </Routes>
    </div>
);

export default App;
