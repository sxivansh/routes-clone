import React from 'react';
import { useState } from 'react';
import '../style.css';
import image from '../images/imgg.png'
function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  

  return (
    <nav>
    <div className="main-container">
    <section className= "container">
        <div className="element-container">
            <div className="element-container-sub">
                <div className="element-container-sub2">

                    <section className=" widgets">
                        <div className="widgets-sub">
                            <div className="logo-main">
                                <div className="logo-container">
                                <img  src={image} alt="Static" className="logo-img"/>
                                <div class="clg-btn">
                                    <div clg-btn-txt>
                                    <div className="button-with-dropdown">
      <button className="blue-button" onClick={toggleDropdown}>
      <span><i class="fa-regular fa-chevron-down V"> </i> Explore Collleges</span>
         
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li className='ok-ok'> Featured colleges </li>
            <li className='li-items'><a href="https://www.learningroutes.in/amity-online/">Amity University</a></li>
            <li className='li-items'><a href="https://www.learningroutes.in/institute-of-management-technology-centre-for-distance-learning/">Institute of Management Technology CDL</a></li>
            <li><a href="https://www.learningroutes.in/chandigarh-online/">Chandigarh University Online</a></li>
          </ul>
        </div>
      )}
    </div>
                                    </div>
                                    
                                 </div>
                                </div>
                                 
                              
                            </div>
                            
                        </div>
                        
                    </section>
                    <ul className='college_list' >
        <li><a className='cl' href="/">Home</a></li>
        <li><a  href="/courses">Our Courses</a></li>
        <li><a  href="/courses">Contact</a></li>
        <li><a href="/explore">Explore More</a></li>
      </ul>

      
                </div>

                <div  className='element-button-wrapper-main'>
                        <div className='element-button-wrapper'>
                        <a href="https://www.learningroutes.in/suggest-a-college/" className='button-btn' role='button'>
                            <span class="elementor-button-content-wrapper">
                           <span class="elementor-button-text">College Finder </span>
                           </span>
                           </a>
                     </div>
                     </div>
            </div>
 
            
            
        </div>
        </section>
    </div>
     
    </nav>
  );
}

export default Navbar;