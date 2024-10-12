import React, { useState } from 'react';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './CreateBlog.css'; // Import your separated CSS


const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveDraft = () => {
    // Logic to save the blog as draft
    alert('Blog saved as draft!');
  };

  const handlePublish = () => {
    // Logic to publish the blog
    alert('Blog published!');
  };

  return (
    <div>
      <Header />
      <div className="create-blog-container">
        <h1>Create a New Blog</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Blog Body</label>
          <textarea
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="6"
          />
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>

        {image && <img src={image} alt="Blog" className="blog-image-preview" />}

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleSaveDraft}>
            Save as Draft
          </button>
          <button className="btn btn-success" onClick={handlePublish}>
            Publish
          </button>
        </div>

        <h3>Share This Blog</h3>
        <div className="social-share">
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default CreateBlog;
