import React from 'react'

import PropTypes from 'prop-types'

import './about.css'

const About = (props) => {
  return (
    <div className="about-about section-container">
      <div className="about-max-width max-content-container">
        <div className="about-text-container">
          <span className="about-text">{props.text}</span>
          <h2 className="about-text01 heading2">
            <span>
              We build brands with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>purpose and impact</span>
          </h2>
          <span className="about-text05">{props.text1}</span>
          <div className="about-checklist">
            <div className="about-check-item">
              <svg viewBox="0 0 1024 1024" className="about-icon">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text06">{props.text2}</span>
            </div>
            <div className="about-check-item1">
              <svg viewBox="0 0 1024 1024" className="about-icon02">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text07">{props.text3}</span>
            </div>
            <div className="about-check-item2">
              <svg viewBox="0 0 1024 1024" className="about-icon04">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text08">{props.text4}</span>
            </div>
            <div className="about-check-item3">
              <svg viewBox="0 0 1024 1024" className="about-icon06">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text09">{props.text5}</span>
            </div>
            <div className="about-check-item4">
              <svg viewBox="0 0 1024 1024" className="about-icon08">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text10">{props.text6}</span>
            </div>
            <div className="about-check-item5">
              <svg viewBox="0 0 1024 1024" className="about-icon10">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="about-text11">{props.text7}</span>
            </div>
          </div>
        </div>
        <div className="about-image-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="about-image"
          />
        </div>
      </div>
    </div>
  )
}

About.defaultProps = {
  text6: 'Future-Proofing Projects',
  text7: 'Support in any implementation',
  image_alt: 'image',
  text3: 'Long-term strategy development',
  image_src: '/playground_assets/rectangle%20109-1000w.png',
  text2: 'Quality services and support all time',
  text1:
    'We are a full-service digital creative agency with brick and mortar offices and plenty of in-house talent.',
  text: 'about us',
  text5: 'Over 10 years in the business',
  text4: 'FREE Brand Audit for startups',
}

About.propTypes = {
  text6: PropTypes.string,
  text7: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
}

export default About
