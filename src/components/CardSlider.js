import React, { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import './CardSlider.css';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 4; // Number of cards visible at a time

  const cards = [
    {
      image: 'https://via.placeholder.com/150',
      domain: 'Web Development',
      title: 'React Basics',
      author: 'John Doe',
      likes: 120
    },
    {
      image: 'https://via.placeholder.com/150',
      domain: 'Data Science',
      title: 'Python for Data Analysis',
      author: 'Jane Smith',
      likes: 90
    },
    {
      image: 'https://via.placeholder.com/150',
      domain: 'Cyber Security',
      title: 'Ethical Hacking',
      author: 'Mark Johnson',
      likes: 150
    },
    {
      image: 'https://via.placeholder.com/150',
      domain: 'Machine Learning',
      title: 'Introduction to ML',
      author: 'Emily Clark',
      likes: 80
    },
    {
      image: 'https://via.placeholder.com/150',
      domain: 'Blockchain',
      title: 'Blockchain Basics',
      author: 'Michael Roe',
      likes: 95
    },
    {
      image: 'https://via.placeholder.com/150',
      domain: 'UI/UX',
      title: 'Design Principles',
      author: 'David Lee',
      likes: 70
    }
  ];

  const totalSlides = cards.length - cardsPerSlide;

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? totalSlides : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === totalSlides ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
       
      <button className="slider-btn prev-btn" onClick={handlePrev}>
        &lt;
      </button>

      <div className="slider-box">
        <div
          className="card-wrapper"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
        >
          {cards.map((card, index) => (
            <div className="card-container" key={index}>
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="domain-box">{card.domain}</div>
              <h3>{card.title}</h3>
              <p>By {card.author}</p>
              <div className="likes-section">
                <BiHeart /> {card.likes}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="slider-btn next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
