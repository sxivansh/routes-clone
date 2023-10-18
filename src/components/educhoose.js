import React from 'react';
import '../style.css';
import image1 from '../images/downl.png'
import image2 from '../images/download (2).png'
import image3 from '../images/download (3).png'
function Educhoose() {
    return(
     <section className='educhoose-content-main'>
        <div className=' educhoose-main'>
          <div className='reason-proof'>
            <div className='reason'>
                <h2 className='me'>
                Why Choose Us
                </h2>
                <div className='proof'>
                    <h2 className='myself'>

                    Make Your Dreams Come True with <span className='blue'> Learning Routes</span>
                    </h2>
                </div>

            </div>

            
          </div>
          <div className='background-overlay'>
          <div background-overlay-texts>
            <p className='p1'>
            Having over 7 years of experience in the EdTech industry, 
            our seasoned professionals have helped over 30,000 individuals to realise their dreams. 
            We help professionals find the right course based upon their interests and passions.
            </p>
            </div>
            <div className='carrer-counselling'>
            <div className='carrer-counsellor-wrapper'>
                <div carrer-counsellor-img>
                  <img src={image1} alt="static" className='C-img'/>  
                </div>
                <div career-counselling-heading>
                    <h2 className='hd'>
                    Free & Personalised Career Counselling.
                    </h2>
                </div>
                <div carrer-counselling-paragraph>
                    <p id='pg'> 
                    We realise that every individual has some unique talents and different ambitions.
                     Therefore, we help them find a course that perfectly caters to their needs.
                    </p>
                </div>
                </div>
                <div className='post-course'>
                    <div className='post-course-wrapper'>
                        <div className='post-course-img'>
                            <img src={image2} alt="static" className='P-img'/>
                        </div>
                    <div className='post-course-heading'>
                        <h2 className='hf'>
                        Career Assistance Post Course Completion
                        </h2>
                    </div>
                    <div className='post-course-paragraph'>
                       <p id='ph'>We make sure that students are able to secure a bright future by offering
                         career assistance services after course completion.</p> 
                    </div>
                </div>
                </div>
            </div>
            
          </div>
        </div>

     </section>






)};
export default Educhoose;