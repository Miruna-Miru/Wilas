import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ReadBlog.css';

const ReadBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        alert(id);
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <p>fhbberubtvruvhbwiubhwtibwtyi</p>
      {blog && (
        <div className="read-blog-container">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h1 className="blog-title">{blog.title}</h1>
          <h3 className="blog-tagline">{blog.tagline}</h3>
          <p className="blog-content">{blog.content}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ReadBlog;
