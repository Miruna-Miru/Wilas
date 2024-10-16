import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'; 
import Blogimg from '../assets/blog.jpg';
import CardSlider from '../components/CardSlider';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

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
            
            <Header />

            
            <div className="main-content">
               
                <section className="blog-header">
                    <img src={Blogimg} alt="Blog Cover" className="blog-image" />
                    <div className="blog-overlay">
                      
                        <h1 data-aos="fade-up">Welcome to Our Blog</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            Discover the latest trends, insights, and tips to stay ahead in the digital world.
                        </p>
                    </div>
                </section>

                <section className="create-blog-section" data-aos="fade-up">
                    <h2>Create Your Own Blog</h2>
                    <p>Share your ideas, thoughts, and experiences with the world. Start your blog today!</p>
                    <button
                        className="create-blog-btn"
                        onClick={() => navigate('/CreateBlog')}
                    >
                        Create Blog
                    </button>
                </section>

                {/* FAQ Section */}
                <section className="faq-section" data-aos="fade-up">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${faq.open ? 'open' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <span className="faq-icon">{faq.open ? '-' : '+'}</span>
                                    {faq.question}
                                </div>
                                <div className="faq-answer" style={{ display: faq.open ? 'block' : 'none' }}>
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trending Blogs Section */}
                <h4 className='explore' data-aos="fade-up">
                    Explore Trending <span>BLOGs</span>
                </h4>

                {/* Card Slider with AOS */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <CardSlider />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;