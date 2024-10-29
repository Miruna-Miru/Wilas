import React, { useState } from 'react';
import './Write.css';

export default function Write({ title, tagline, onPublish }) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [showIconNearTextArea, setShowIconNearTextArea] = useState(false);
  const [insertedImages, setInsertedImages] = useState([]);
  const [isPublished, setIsPublished] = useState(false); // Manage published state

  const handlePublishClick = async (e) => {
    e.preventDefault();
    setIsPublished(true);
  
    const blogData = {
      title,
      tagline,
      category,
      image,
      content: document.querySelector('.writeText').value,
    };
  
    console.log('Publishing blog data:', blogData); // Log data being sent
  
    try {
      const response = await fetch('http://localhost:5000/CreateBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });
  
      const data = await response.json();
      console.log('Response from server:', data); // Log server response
  
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to publish the blog post.');
    }
  };
  
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const newImageURL = URL.createObjectURL(e.target.files[0]);
      if (!image) {
        setImage(newImageURL);
      } else {
        setInsertedImages((prevImages) => [...prevImages, newImageURL]);
      }
      setShowIconNearTextArea(true);
    }
  };

  const handleTextAreaFocus = () => {
    if (image) {
      setShowIconNearTextArea(true);
    }
  };

  const handleSaveDraft = () => {
    alert("Draft saved!");
  };

  return (
    <div className="write">
      {/* Show only the published content if isPublished is true */}
      {isPublished ? (
        <div className="publishedInfo">
          <h2>{title}</h2>
          <h4>{tagline}</h4>
          <h5>Category: {category}</h5>
          <img
            className="writeImg"
            src={image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
          />
          <div className="social-share">
            <p className='shr'>
              Share on!
            </p>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" style={{ fontSize: '42px' }}></i>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" style={{ fontSize: '42px' }}></i>
            </a>
            <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" style={{ fontSize: '42px' }}></i>
            </a>
          </div>
        </div>
      ) : (
        // Writing form shown only if not published
        <form className="writeForm">
          <img
            className="writeImg"
            src={image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
          />
          <div className="writeFormGroup">
            {!showIconNearTextArea && (
              <label htmlFor="fileInput" className="iconWrapper">
                <i className="writeIcon fas fa-plus"></i>
              </label>
            )}
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              value={title}
              readOnly
            />
          </div>
          <div className="writeFormGroup">
            <input
              className="writeInput taglineInput"
              placeholder="Tagline"
              type="text"
              value={tagline}
              readOnly
            />
          </div>

          <div className="writeFormGroup">
            <select
              className="dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select Category</option>
              <option value="Technical">Technical</option>
              <option value="Interview Experience">Interview Experience</option>
              <option value="Campus Life">Campus Life</option>
              <option value="Hackathon">Hackathon</option>
            </select>
          </div>

          <div className="writeFormGroup writeStory" onFocus={handleTextAreaFocus}>
            {showIconNearTextArea && (
              <label htmlFor="fileInput" className="iconWrapper" style={{ position: 'absolute', left: '10px', top: '5px' }}>
                <i className="writeIcon fas fa-plus"></i>
              </label>
            )}
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />

            {insertedImages.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt="Uploaded" className="insertedImage" />
            ))}
          </div>

          <div className="buttonGroup">
            <button className="writeSaveDraft" type="button" onClick={handleSaveDraft}>
              Save as Draft
            </button>
            {!isPublished && (
              <button className="writeSubmit" onClick={handlePublishClick}>
                <i className="fas fa-paper-plane"></i> Publish
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
