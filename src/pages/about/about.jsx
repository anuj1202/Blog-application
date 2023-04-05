import React from 'react';
import './about.css';
import Image1 from './image1.jpeg';
import Image2 from './image2.jpeg';

export const about = () => {
  return (
    <div className="about-us-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>We are a group of passionate writers and bloggers who love to share our thoughts and ideas with the world. Our mission is to provide high-quality content that informs, inspires, and entertains our readers.</p>
        <p>With years of experience in the industry, we have built a strong reputation for producing engaging and insightful articles that cover a wide range of topics. We pride ourselves on our commitment to excellence and our dedication to providing the best possible experience for our readers.</p>
      </div>
      <div className="about-image">
        <img src={Image1} alt="Team" />
      </div>
      <div className="about-image">
        <img src={Image2} alt="Team" />
      </div>
    </div>
  );
};
