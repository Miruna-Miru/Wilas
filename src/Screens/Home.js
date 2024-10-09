import React, { useState } from 'react';
import Header from '../components/Header'; // Import Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const Home = () => {
  const [faqs, setFaqs] = useState([
    { question: 'What is a blog?', answer: 'A blog is a regularly updated website or web page, typically run by an individual or small group, written in an informal or conversational style.', open: false },
    { question: 'How do I start a blog?', answer: 'To start a blog, choose a blogging platform, select a unique name, and begin writing content for your audience.', open: false },
    { question: 'How often should I blog?', answer: 'Consistency is key. Ideally, you should blog at least once a week, but it depends on your goals and audience.', open: false }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Body */}
      <div className="main-content" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        {/* Blog Captivating Section */}
        <section className="blog-header" style={{ backgroundColor: '#E8EAF6', padding: '50px 20px', textAlign: 'center' }}>
          <h1 style={{ color: '#474BCA', fontWeight: 'bold' }}>Welcome to Our Blog</h1>
          <p style={{ color: '#474BCA', fontSize: '18px' }}>
            Discover the latest trends, insights, and tips to stay ahead in the digital world.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" style={{ backgroundColor: '#fff', padding: '40px 20px' }}>
          <h2 style={{ color: '#474BCA', textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h2>
          <div className="container">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${faq.open ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={faq.open}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${faq.open ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
       <Footer/>
      </div>

      {/* CSS in the same file */}
      <style jsx="true">{`
        .main-content {
          background-color: #f0f0f0;
        }

        .blog-header {
          background-color: #E8EAF6;
          padding: 50px 20px;
          text-align: center;
        }

        .faq-section {
          background-color: #fff;
          padding: 40px 20px;
        }

        .accordion-button {
          background-color: #F9E6E6;
          color: #474BCA;
        }

        .accordion-body {
          color: #333;
          font-size: 16px;
        }

        .accordion-button:focus {
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .blog-header h1 {
            font-size: 28px;
          }

          .blog-header p {
            font-size: 16px;
          }

          .faq-section h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
