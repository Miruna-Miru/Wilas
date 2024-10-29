import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import './BlogList.css';
import AOS from 'aos';
import IMG from '../assets/blog.jpg';

const BlogList = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs?category=${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bdy">
      <Header />
      <h1 className='topic'>{category} Blogs</h1>
      <div className="blog-list">
        <br/>
        {blogs.map(blog => (
          <div className="cards" key={blog._id} data-aos="fade-up">
            <img src={IMG} alt={blog.title} className="cards-image" />
            <div className="cards-content">
              <h2 className="cards-title">{blog.title}</h2>
              <p className="cards-body">{blog.tagline}</p>
              <Link to={`/ReadBlog/${blog._id}`} className="button">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
