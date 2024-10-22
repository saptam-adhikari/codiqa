import React, { useState } from 'react';
import './Header.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  const sections = [
    {
      id: 1,
      h1: "Join the Codiqa",
      h2: "Social Network",
      p: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.",
      img: "https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-slider-01.png"
    },
    {
      id: 2,
      h1: "Build Real",
      h2: "Relationship",
      p: "Dramatically engage high-payoff infomediaries rather than client-centric imperatives. Efficiently initiate world-class applications after client-centric infomediaries.",
      img: "https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-slider-02.png"
    },
    {
      id: 3,
      h1: "Enabling the",
      h2: "Communication",
      p: "Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost effective manufactured products.",
      img: "https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-slider-03.png"
    },
    {
      id: 4,
      h1: "Driven by Business",
      h2: "Connections",
      p: "Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
      img: "https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-slider-04.png"
    }
  ];

  const totalSlides = sections.length; // Total number of sections

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Go to next slide
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides); // Go to previous slide
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className='header'>
      <nav className='navbar'>
        <div id='logo'>
          <a href="https://codiqa.bold-themes.com/social/">
            <img
              src='https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2020/02/Logo.png'
              alt='logo'
            />
          </a>
        </div>

        <div className='navlist'>
          <ul className='options'>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Home
              {dropdownVisible && (
                <ul className="dropdown">
                  <li>Software Team</li>
                  <li>Product</li>
                  <li>Social Network</li>
                  <li>Application</li>
                  <li>Creative Team</li>
                </ul>
              )}
            </li>
            <li>About us</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Elements</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className='search-section'>
          <a href='/'><LocalMallIcon style={{ color: 'white' }} /></a>
          <a href='/'><SearchIcon style={{ color: 'white' }} /></a>
        </div>
      </nav>

      <div className='slider-container'>
        {/* Section sliding container */}
        <div
          className='slides'
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`header-section ${index % 2 === 1 ? 'left-img' : ''}`}
            >
              <div className='header-content'>
                <h1>{section.h1}</h1>
                <h2>{section.h2}</h2>
                <p>{section.p}</p>
                <div className='get-started-btn'>
                  <button>Get Started now!</button>
                  <a href='/'>What do you get when you register?</a>
                </div>
              </div>
              <span className='header-img'>
                <img src={section.img} alt="img" />
              </span>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className='prev-btn' onClick={handlePrevSlide}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <button className='next-btn' onClick={handleNextSlide}>
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default Header;
