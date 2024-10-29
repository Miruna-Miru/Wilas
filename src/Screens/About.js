import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Header />

            <div className="about-main-content">
                {/* Web Name and Tagline */}
                <section className="about-header">
                    <h1 data-aos="fade-up">UniVerse</h1>
                    <p data-aos="fade-up" data-aos-delay="200">Voices, Visions, and Ventures of Our Campus</p>
                </section>
                <section className='what_do'>
                     

                </section>
                <section className="what-we-do" data-aos="fade-up">
                    
                </section>

                {/* Who We Are Section */}
                <section className="who-we-are" data-aos="fade-up">
                    <h2>Who We Are</h2>
                    <div className="people-container">
                        <div className="person" data-aos="fade-up">
                            <img src="person1.jpg" alt="Person 1" />
                            <h3>Person 1</h3>
                            <p>Role and description for person 1.</p>
                        </div>
                        <div className="person" data-aos="fade-up" data-aos-delay="100">
                            <img src="person2.jpg" alt="Person 2" />
                            <h3>Person 2</h3>
                            <p>Role and description for person 2.</p>
                        </div>
                        <div className="person" data-aos="fade-up" data-aos-delay="200">
                            <img src="person3.jpg" alt="Person 3" />
                            <h3>Person 3</h3>
                            <p>Role and description for person 3.</p>
                        </div>
                        <div className="person" data-aos="fade-up" data-aos-delay="300">
                            <img src="person4.jpg" alt="Person 4" />
                            <h3>Person 4</h3>
                            <p>Role and description for person 4.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default About;
