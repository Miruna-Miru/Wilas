import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLightbulb, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './CreateBlog.css';
import WriteImage from '../assets/write.webp';
import WWrite from '../components/Write';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [step, setStep] = useState(1);

  const handlePublish = () => {
    alert("Blog published successfully!");
    setStep(3); // Move to the share step
  };

  return (
    <div>
      <Header />
      <div className="create-blog-container">
        {step === 1 ? (
          <div className="step-one">
            <div className="image-column">
              <img src={WriteImage} alt="Blog Cover" className="blog-image-placeholder" />
            </div>
            <div className="form-column">
              <h1>Create a New Blog</h1>
              <div className="form-group">
                <label>Blog Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required={true}
                />
              </div>
              <div className="form-group">
                <label>Tagline</label>
                <input
                  type="text"
                  className="form-control"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  required={true}
                />
              </div>
              <div className="tagline-help">
                <FaLightbulb /> <span>Tagline helps readers understand what your blog is about.</span>
              </div>
              <button className="btn btn-primary" onClick={() => setStep(2)}>
                Create Blog
              </button>
            </div>
          </div>
        ) : step === 2 ? (
          <WWrite title={title} tagline={tagline} onPublish={handlePublish} />
        ) : (
          <div className="step-three">
            <h3>Your blog has been published!</h3>
            <h4>Share This Blog</h4>
            <div className="social-share">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
