import React from "react";
import '../style.css';
import image from '../images/web-png_05-copy.webp';
import Upgradimage from '../images/upgrad-logo.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypeWriter from 'typewriter-effect';
import Slider from "react-slick";

const Edusection = () => {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="edu_main">
      <div className="edu_main_sub">
        <div className="text-container">
          <div className="text-container2">
            <div className="text-container_sub">
              <div className="carrer-counsellor">
                <div className="carrer-counsellor_sub">
                  <h6 className="heading">Leading career counselors</h6>
                </div>
                <div className="india-leading-main">
                  <h2 className="heading2">
                    <span className="heading2-sub">Explore India’s Top</span>
                    <br />
                    <span className="heading2-sub2">Distance Colleges for</span>
                  </h2>
                </div>
                <div className="animated-text">
                  <span className="animated-text-sub">
                    <TypeWriter options={{
    strings: ['Career Advancement', 'Personal Development','Professional Growth'],
    autoStart: true,
    loop: true,
    cursor:null
  }}
                  
                    />
                  </span>
                </div>
                <div className="uleash-hidden-main">
                  <div className="uleash-hidden">Unleash Your Hidden Potential.</div>
                </div>
                <div className="search-bar-main">
                  <div className="search-bar">
                    <form className="search-bar-sub" role = 'search' action = 'https://www.learningroutes.in' method="get">
                      <div className="search-form-container">
                      <i class="fa-solid fa-magnifying-glass Gone"></i> 
                      {/* <span className="KK">
                        Search
                      </span> */}
                     </div>
                    <input placeholder="Search Courses &amp; Colleges" class="search-bar-form_input" type="search" name="s" title="Search" value=""></input>
                    </form>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='edu_sub'>
          <div className="edu_sub_image">
            <img src={image} alt="static" className="img2" />
          </div>
        </div>
          <div className="eduSwipes-container">
            <div className="eduSwipes-main">
              <div className="edu-img">
              <Slider {...settings}>
      <div>
        <h3><div  className="img-main"> <img src={Upgradimage} alt="static" className="ED-img"/>  </div></h3>
      </div>
      <div>
        <h3> <div  className="img-main"><img src={Upgradimage} alt="static" className="ED-img"/> </div></h3>
      </div>
      <div>
        <h3> <div  className="img-main"><img src={Upgradimage} alt="static" className="ED-img"/></div> </h3>
      </div>
      <div>
        <h3> <div  className="img-main"> <img src={Upgradimage} alt="static" className="ED-img"/> </div></h3>
      </div>
      <div>
        <h3> <div className="img-main"><img src={Upgradimage} alt="static" className="ED-img"/> </div></h3>
      </div>
      <div>
        <h3> <div className="img-main"> <img src={Upgradimage} alt="static" className="ED-img"/> </div></h3> 
      </div>
      <div>  

        <h3> <div className="img-main"><img src={Upgradimage} alt="static" className="ED-img"/> </div></h3>
      </div>
    </Slider>
              </div>

            </div>

     </div>
      </div>
    </section>
  );
}

export default Edusection;
